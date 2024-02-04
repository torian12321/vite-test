import { FormRenderer, FIELD_TYPE } from 'form-renderer';
// TODO: add OnChangeArgs to main exports
import type { OnChangeArgs } from '../../../../../../packages/form-renderer/src/components/FormRenderer';
import type { Field } from '../../../../../../packages/form-renderer/src/components/FormRenderer';

import { useAppSelector } from '../../../store/actions';
import { getSelectedField } from '../../../store/selectors/settings.selectors';
import { useGetFieldById } from '../../../store/selectors/fields.selectors';
import { useFieldActions } from '../../../store/actions/fields';
import { FORM_FIELDS } from './constants';

export const FieldDetailsForm = () => {
    const selectedFieldId = useAppSelector(getSelectedField);
    const fieldDetails = useGetFieldById(selectedFieldId);
    const { updateFieldById } = useFieldActions();

    const handleOnChange = ({ values }: OnChangeArgs) => {
        const hasChanges = Object.keys(values).find(
            // @ts-ignore
            (k) => values[k] !== fieldDetails[k]
        );

        if (hasChanges) {
            updateFieldById(selectedFieldId, values as Field);
        }
    };

    return selectedFieldId ? (
        <FormRenderer
            key={selectedFieldId}
            id="field-details"
            fields={FORM_FIELDS}
            onChange={handleOnChange}
            defaultValues={{
                name: fieldDetails?.name || '',
                label: fieldDetails?.label || '',
                type: fieldDetails?.type || FIELD_TYPE.TEXT,
            }}
        />
    ) : null;
};
