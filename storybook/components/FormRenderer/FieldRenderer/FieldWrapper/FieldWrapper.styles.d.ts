/// <reference types="react" />
import type { Theme } from '@mui/material/styles';
import { MESSAGE_SEVERITY } from './FieldWrapper.types';
export declare const Wrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface FieldContainerProps {
    inlineDisplay?: boolean;
}
export declare const FieldContainer: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & FieldContainerProps, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface FieldContainerProps {
    isOpen?: boolean;
}
export declare const FADE_IN_DELAY = 600; /** In ms */
export declare const HelperTextWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & FieldContainerProps, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
interface HelperMessageProps {
    severity?: MESSAGE_SEVERITY;
}
export declare const HelperMessage: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & HelperMessageProps, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const FieldBox: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Label: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const LabelAsterisk: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import('../../../../../../../node_modules/react').DetailedHTMLProps<import('../../../../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export {};
