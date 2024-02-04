import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export enum MODES {
  VISUAL = 'mode_visual',
  CODE = 'mode_code',
}

export type SettingsState = {
  selectedField: string,
  mode: MODES,
};

const initialState: SettingsState = {
  selectedField: '',
  mode: MODES.VISUAL,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSelectedField: (state, action: PayloadAction<string>) => {
      state.selectedField = action?.payload
    },
    unsetSelectedField: (state) => {
      state.selectedField = ''
    },
    setMode: (state, action: PayloadAction<MODES>) => {
      state.mode = action?.payload
    },
    setVisualMode: (state) => {
      state.mode = MODES.VISUAL
    },
    setCodeMode: (state) => {
      state.mode = MODES.CODE
    },
  },
})

export const { setSelectedField, unsetSelectedField, setVisualMode, setCodeMode } = settingsSlice.actions

export default settingsSlice.reducer;
