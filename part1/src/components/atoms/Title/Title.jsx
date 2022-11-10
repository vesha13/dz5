import React from 'react'

export const Title = (props) => {
    const {size =1, children, ...restProps} = props;
    const Component = 'h' + size;

    return <Component {...restProps} className= 'title'>{children}</Component>
}