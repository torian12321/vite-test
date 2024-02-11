/**
 *
 * Validate option selected.
 *
 * If the value set on the dropdown does not exist on the options, clear the value.
 * This is useful when the list of options is externally changed, the previously selected value might not exist on the new list of options.
 */
export declare const useValidateOptionSelected: (fieldName: string) => void;
