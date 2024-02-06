import type { Field } from 'form-renderer'
import { add, reset, updateField } from '../slices/fieldsSlice'
import { useAppDispatch } from '.'

interface UseFieldActions {
  addField: () => void
  resetFields: () => void
  updateFieldById: (fieldUuid: string, fieldDetails: Field) => void
}

export const useFieldActions = (): UseFieldActions => {
  const dispatch = useAppDispatch()

  const addField = (): void => {
    dispatch(add())
  }
  const resetFields = (): void => {
    dispatch(reset())
  }
  const updateFieldById = (fieldUuid: string, fieldDetails: Field): void => {
    dispatch(updateField({ fieldUuid, fieldDetails }))
  }

  return {
    addField,
    resetFields,
    updateFieldById,
  }
}
