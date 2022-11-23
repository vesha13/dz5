import React from 'react'

export const Link = (props) => {
    const { children, ...restProps} = props;
    return <a {...restProps} className ='link'>{children}</a>
}