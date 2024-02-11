import type { Choice } from '../FieldRenderer';
import type { Field, FormLogic } from '../FormRenderer.types';
export interface FormData {
    fields: Field[];
    logic?: FormLogic[];
}
export declare const mockOptions: Choice[];
