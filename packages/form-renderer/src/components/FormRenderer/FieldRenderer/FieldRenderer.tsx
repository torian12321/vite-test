import { useMemo } from 'react';
import { useFormContext } from '../FormContext';
import { FIELD_TYPE } from '../FormRenderer.constants';
import type { FieldRendererProps, muiStyles } from './FieldRenderer.types';
import { isInfoField, isFieldWithLabel } from './FieldRenderer.utils';
import { FieldWrapper } from './FieldWrapper';
import type { FieldProps } from './Fields';
import {
  BooleanField,
  DateField,
  DateTimeField,
  FileInput,
  LongTextField,
  NumericField,
  DropdownField,
  OptionsListField,
  TextField,
  RadioGroup,
  InfoMessage,
  InfoList,
} from './Fields';
import { useGetChoices } from './useGetChoices';
import { useValidateOptionSelected } from './useValidateOptionSelected';

export const FieldRenderer = ({
  name,
  sxFields = {},
  sxFieldsByType = {},
  sxFieldsByName = {},
}: FieldRendererProps): JSX.Element | null => {
  useValidateOptionSelected(name);
  const { choices = [], isLoading = false } = useGetChoices(name);
  const { getFieldProps, innerLabel, inlineDisplay } = useFormContext();
  const {
    type,
    value,
    label,
    messages,
    placeholder,
    disabled,
    isValid = true,
    visible = true,
    validations = {},
    onBlur,
    setValue,
  } = getFieldProps(name);
  const isRequired = Boolean(validations.required);

  const showInlineLabel = useMemo(
    () =>
      isInfoField(type) ||
      (!inlineDisplay && innerLabel && !isFieldWithLabel(type)),
    [inlineDisplay, innerLabel, type],
  );

  if (!visible) return null;

  const commonFieldprops: FieldProps = {
    type,
    name,
    value,
    placeholder,
    label: showInlineLabel ? label : undefined,
    onBlur,
    onChange: setValue,
    loading: isLoading,
    disabled: disabled || isLoading,
    error: !isValid,
    required: isRequired,
    properties: {
      choices,
    },
  };

  const renderField = () => {
    switch (type) {
      case FIELD_TYPE.FILE_UPLOAD:
        return <FileInput {...commonFieldprops} />;
      case FIELD_TYPE.BOOLEAN:
        return <BooleanField {...commonFieldprops} />;
      case FIELD_TYPE.DATE:
        return <DateField {...commonFieldprops} />;
      case FIELD_TYPE.DATE_TIME:
        return <DateTimeField {...commonFieldprops} />;
      case FIELD_TYPE.NUMBER:
        return <NumericField {...commonFieldprops} />;
      case FIELD_TYPE.RADIO_BUTTON:
        return <RadioGroup {...commonFieldprops} />;
      case FIELD_TYPE.LONG_TEXT:
        return <LongTextField {...commonFieldprops} />;
      case FIELD_TYPE.DROPDOWN:
        return <DropdownField {...commonFieldprops} />;
      case FIELD_TYPE.OPTIONS_LIST:
        return <OptionsListField {...commonFieldprops} />;
      case FIELD_TYPE.INFO_MESSAGE:
        return <InfoMessage {...commonFieldprops} />;
      case FIELD_TYPE.INFO_LIST:
        return <InfoList {...commonFieldprops} />;
      case FIELD_TYPE.TEXT:
      default:
        return <TextField {...commonFieldprops} />;
    }
  };

  const combinedStyles = {
    ...sxFields,
    ...(sxFieldsByName[name] || {}),
    ...(sxFieldsByType[type] || {}),
  } as muiStyles;

  return (
    <FieldWrapper
      sx={combinedStyles}
      name={name}
      label={label}
      required={isRequired}
      messages={messages}
      showLabel={!showInlineLabel}
      inlineDisplay={inlineDisplay}
    >
      {renderField()}
    </FieldWrapper>
  );
};
