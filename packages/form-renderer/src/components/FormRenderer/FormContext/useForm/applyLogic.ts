import { mergeDeep } from '../../../utils/objectUtils';
import { isString } from '../../../utils/textUtils';
import { LOGIC_ACTIONS, LOGIC_TYPES } from '../../FormRenderer.constants';
import type {
  FormLogic,
  FormLogicCondition,
  FormField,
  ConditionLogical,
} from '../../FormRenderer.types';
import type { FormFields } from './useForm.types';

export const applyFieldLogic = (
  formFields: FormFields,
  formLogic: FormLogic[] = [],
): FormFields => {
  let newFields = { ...formFields };

  formLogic.forEach(({ actions = [], condition }) => {
    const conditionPasses = checkIfConditionPass(formFields, condition);

    actions.forEach(({ action, ref }) => {
      const refValues = isString(ref) ? [ref] : ref;

      refValues.forEach(fieldRef => {
        if (!fieldExist(formFields, fieldRef)) return;

        // Combine the current field config + any possible update applied from actions
        const updatedField = mergeDeep(
          newFields[fieldRef] as Partial<FormField>,
          getActionUpdates(action, conditionPasses),
        ) as Partial<FormField>;

        newFields = {
          ...newFields,
          [fieldRef]: updatedField as FormField,
        };
      });
    });
  });

  return newFields;
};

const fieldExist = (formFields: FormFields, fieldName: string): boolean =>
  Boolean(formFields[fieldName]);

const fieldIsVisible = (formFields: FormFields, fieldName: string): boolean =>
  Boolean(formFields[fieldName] && formFields[fieldName].visible);

const isLogicCondition = (con: FormLogicCondition): con is ConditionLogical =>
  [LOGIC_TYPES.AND, LOGIC_TYPES.OR].includes(con.type);

const checkIfConditionPass = (
  formFields: FormFields,
  condition: FormLogicCondition,
): boolean => {
  if (isLogicCondition(condition)) {
    const { type, conditions = [] } = condition;

    // For 'AND' & 'OR' types do a recursive call with all subconditions.
    switch (type) {
      case LOGIC_TYPES.OR:
        return conditions.some(subCondition =>
          checkIfConditionPass(formFields, subCondition),
        );
      case LOGIC_TYPES.AND:
        return conditions.every(subCondition =>
          checkIfConditionPass(formFields, subCondition),
        );
      default:
        return false;
    }
  }

  const { type, ref } = condition;
  const fieldValue = formFields[ref].value;

  if (!fieldExist(formFields, ref)) return false;
  if (!fieldIsVisible(formFields, ref)) return false;

  // HasValue does no need a value to compare.
  if (condition.type === LOGIC_TYPES.HAS_VALUE) {
    return ![undefined, null, ''].includes(fieldValue);
  }

  const { value } = condition;

  switch (type) {
    case LOGIC_TYPES.EQUAL:
      return Array.isArray(value)
        ? value.includes(fieldValue)
        : fieldValue === value;
    case LOGIC_TYPES.NOT_EQUAL:
      return Array.isArray(value)
        ? !value.includes(fieldValue)
        : fieldValue !== value;
    case LOGIC_TYPES.LOWER_THAN:
      return fieldValue < value;
    case LOGIC_TYPES.GREATER_THAN:
      return fieldValue > value;
    default:
      return false;
  }
};

const getActionUpdates = (
  action: LOGIC_ACTIONS,
  conditionPasses: boolean,
): Partial<FormField> => {
  const update = {
    validations: {},
  } as Partial<FormField>;

  switch (action) {
    case LOGIC_ACTIONS.SHOW:
      update.visible = conditionPasses;
      break;
    case LOGIC_ACTIONS.HIDDE:
      update.visible = !conditionPasses;
      break;
    case LOGIC_ACTIONS.MAKE_MANDATORY:
      // eslint-disable-next-line
      // @ts-ignore
      update.validations.required = conditionPasses;
      break;
    case LOGIC_ACTIONS.MAKE_DISABLED:
      update.disabled = conditionPasses;
      break;
    default:
      break;
  }

  return update;
};
