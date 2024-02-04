import { FIELD_TYPE } from '../../FormRenderer.constants';

export type FieldProps = {
  name: string;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onBlur?: VoidFunction;
  error?: boolean;
  required?: boolean;
  properties?: Properties;
} & (
  | TextFieldProps
  | LongTextFieldProps
  | NumberFieldProps
  | DateFieldProps
  | DateTimeFieldProps
  | BooleanFieldProps
  | FileFieldProps
  | SelectFieldProps
  | RadioGroupFieldProps
  | OptionsListFieldProps
  | InfoMessageProps
  | InfoListProps
);

type TextFieldProps = {
  type: FIELD_TYPE.TEXT;
  value?: string;
  onChange: (val: string) => void;
};

type LongTextFieldProps = {
  type: FIELD_TYPE.LONG_TEXT;
  value?: string;
  onChange: (val: string) => void;
};

type NumberFieldProps = {
  type: FIELD_TYPE.NUMBER;
  value: number;
  onChange: (val: number | undefined) => void;
};

type BooleanFieldProps = {
  type: FIELD_TYPE.BOOLEAN;
  value?: boolean | undefined;
  onChange: (val: boolean) => void;
};

// TODO
export type FileFieldProps = {
  type: FIELD_TYPE.FILE_UPLOAD;
  value?: File;
  onChange: (file: File | FileList | undefined) => void;
  accept?: string[];
  isUploading?: boolean;
  sizeLimit?: number; // In bytes
  isUsingIcon?: boolean;
  multiple?: boolean;
};

type DateFieldProps = {
  type: FIELD_TYPE.DATE;
  value?: string | Date;
  onChange: (val: string | null) => void;
};
type DateTimeFieldProps = {
  type: FIELD_TYPE.DATE_TIME;
  value?: string | Date;
  onChange: (val: string | null) => void;
};

type SelectFieldProps = {
  type: FIELD_TYPE.DROPDOWN;
  value?: ChoiceValue;
  onChange: (val: ChoiceValue) => void;
};
type RadioGroupFieldProps = {
  type: FIELD_TYPE.RADIO_BUTTON;
  value?: ChoiceValue;
  onChange: (val: ChoiceValue) => void;
};
type OptionsListFieldProps = {
  type: FIELD_TYPE.OPTIONS_LIST;
  value?: ChoiceValue[];
  onChange: (val: ChoiceValue[]) => void;
};
type InfoMessageProps = {
  type: FIELD_TYPE.INFO_MESSAGE;
  value?: string;
  onChange: never;
};
type InfoListProps = {
  type: FIELD_TYPE.INFO_LIST;
  value?: string;
  onChange: never;
};

export type ChoiceValue = string | number | null;
export interface Choice {
  value: ChoiceValue;
  label?: string;
  disabled?: boolean;
}

export type Properties = {
  choices?: Choice[];
  choicesRef?: string;
};

export type ChoiceItem = {
  isLoading?: boolean;
  choices: Choice[];
};

export type ChoicesCollection = {
  [key: string]: ChoiceItem;
};
