import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
import { ButtonVariant } from './types';
export interface ButtonProps extends React.HTMLAttributes<HTMLElement>, BsPrefixPropsWithChildren {
    active?: boolean;
    block?: boolean;
    variant?: ButtonVariant;
    size?: 'sm' | 'lg';
    type?: 'button' | 'reset' | 'submit' | string;
    href?: string;
    disabled?: boolean;
    target?: any;
}
declare type Button = BsPrefixRefForwardingComponent<'button', ButtonProps>;
export declare type CommonButtonProps = 'href' | 'size' | 'variant' | 'disabled';
declare const Button: Button;
export default Button;
