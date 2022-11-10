import React from 'react'

export const Text = (props) => {
    const { children, ...restProps} = props;
    

    return <p {...restProps} className ='text'>{children}</p>
}