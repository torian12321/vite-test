import { createSelector } from '@reduxjs/toolkit';
import type { Field } from 'form-renderer';
import type { FieldsState } from '../slices/fieldsSlice';
import type { RootState } from '../';
import { useAppSelector } from '../actions';

export const getFields = (state: RootState): FieldsState => state.fields || {};

export const getFieldsList = createSelector(getFields, (fields): Field[] => Object.values(fields));

export const getFieldIds = createSelector(getFields, (fields): string[] => Object.keys(fields));

export const useGetFieldById = (fieldId: string): Field => {
    const fields = useAppSelector(getFields);

    return fields[fieldId] || undefined;
};
