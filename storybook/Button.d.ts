import { PropsWithChildren } from '../../../node_modules/react';
type ButtonProps = {
    color?: string;
    variant?: 'main' | 'secondary';
};
export declare const Button: ({ children, }: PropsWithChildren<ButtonProps>) => JSX.Element;
export {};
