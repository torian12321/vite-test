import { FieldRenderer } from './FieldRenderer';
import { Form } from './Form';
import { FormContext, useForm } from './FormContext';
import { applyFieldLogic } from './FormContext/useForm/applyLogic';
import type { FormRendererProps } from './FormRenderer.types';
import { setInitialFormFields } from './setInitialFormFields';

export const FormRenderer = ({
  id,
  fields = [],
  logic = [],
  disabled = false,
  defaultValues = {},
  validateAfterSubmit = true,
  sxForm,
  sxFields,
  sxFieldsByName = {},
  sxFieldsByType = {},
  innerLabel = false,
  inlineDisplay = false,
  choicesCollection = {},
  onSubmit = () => undefined,
  onChange = () => undefined,
}: FormRendererProps): JSX.Element => {
  // Get initial default fields
  const initialFields = setInitialFormFields(fields, defaultValues);
  // Apply an initial logic to fields before render on screen to avoid initial flickers
  const initialFieldsWithLogic = applyFieldLogic(initialFields, logic);
  const values = useForm({
    fields: initialFieldsWithLogic,
    logic,
    validateAfterSubmit,
    onSubmit,
  });

  return (
    <FormContext.Provider
      value={{
        innerLabel,
        inlineDisplay,
        choicesCollection,
        ...values,
      }}
    >
      <Form id={id} sx={sxForm} disabled={disabled} onChange={onChange}>
        {fields.map(({ name }) => (
          <FieldRenderer
            key={name}
            name={name}
            sxFields={sxFields}
            sxFieldsByName={sxFieldsByName}
            sxFieldsByType={sxFieldsByType}
          />
        ))}
      </Form>
    </FormContext.Provider>
  );
};
