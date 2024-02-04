import {
  setSelectedField as setSF,
  unsetSelectedField,
  setVisualMode,
  setCodeMode,
} from '../slices/settings.slice';
import { useAppDispatch } from '.';

interface UseSettingsActions {
  setSelectedField: (fieldId: string) => void;
  unsetSelectedField: () => void;
  setVisualMode: () => void;
  setCodeMode: () => void;
}

export const useSettingsActions = (): UseSettingsActions => {
  const dispatch = useAppDispatch();

  const setSelectedField = (fieldId: string): void => {
    dispatch(setSF(fieldId));
  };

  return {
    setSelectedField,
    unsetSelectedField: () => dispatch(unsetSelectedField()),
    setVisualMode: () => dispatch(setVisualMode()),
    setCodeMode: () => dispatch(setCodeMode()),
  };
};
