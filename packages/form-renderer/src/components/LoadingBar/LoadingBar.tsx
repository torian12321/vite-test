import MuiLinearProgress from '@mui/material/LinearProgress';
import type { LoadingBarProps } from './LoadingBar.types';

export const DATA_TEST = 'loader';

export const LoadingBar = ({
  show = true,
  sx,
}: LoadingBarProps): JSX.Element | null =>
  show ? <MuiLinearProgress data-testid={DATA_TEST} sx={sx} /> : null;
export default LoadingBar;
