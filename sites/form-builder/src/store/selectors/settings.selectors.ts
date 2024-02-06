import { createSelector } from '@reduxjs/toolkit'
import type { Field } from 'form-renderer'
import type { RootState } from '../'
import type { SettingsState, MODES } from '../slices/settings.slice'
import { getFields } from './fields.selectors'

const getSettings = (state: RootState): SettingsState => state.settings

export const getSelectedField = createSelector(
  [getSettings],
  (settings): string => settings.selectedField || '',
)

export const getSelectedFieldDetails = createSelector(
  [getFields, getSelectedField],
  (fields, selectedField): Field => fields[selectedField] || undefined,
)

export const getDisplayMode = createSelector(
  [getSettings],
  (settings): MODES => settings.mode,
)
