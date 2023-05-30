import React from 'react';

export interface IHeaderProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    children: string | React.ReactNode,
    margin?: string,
    scrollMarginTop?: string,
    id?: string
}

export type HProps = {
    margin?: string,
    scrollMarginTop?: string
}


export const Header = (props: IHeaderProps): JSX.Element => {
    const {
        children, id, ...restProps
    } = props

    switch (props.type) {
        case 'h1': {
            return (
                <h1 style={{ ...restProps }} id={id}>
                    {children}
                </h1>
            )
        }
        case 'h2': {
            return (
                <h2 {...restProps}>
                    {children}
                </h2>
            )
        }
        case 'h3': {
            return (
                <h3 {...restProps}>
                    {children}
                </h3>
            )
        }
        case 'h4': {
            return (
                <h4 style={{ ...restProps }} id={id}>
                    {children}
                </h4>
            )
        }
        case 'h5': {
            return (
                <h5 {...restProps}>
                    {children}
                </h5>
            )
        }
        case 'h6':
            {
                return (
                    <h6 {...restProps}>
                        {children}
                    </h6>
                )
            }
        default:
            {
                return (
                    <h1 {...restProps}>
                        {children}
                    </h1>
                )
            }
    }
}
