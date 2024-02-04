import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export type muiStyles = SxProps<Theme>;
export interface FieldRendererProps {
  name: string;
  sxFields?: SxProps<Theme>;
  sxFieldsByType?: { [fieldType: string]: muiStyles };
  sxFieldsByName?: { [fieldName: string]: muiStyles };
}
