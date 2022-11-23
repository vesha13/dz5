import React from 'react'

export const Text = (props) => {
    const { children, ...restProps} = props;
    

    return <b {...restProps} className ='text'>{children}</b>
}