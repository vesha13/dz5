import React from 'react'

export const Input = (props) => {
    const {  ...restProps} = props;
    return(
        <span  className ='input' {...restProps}>
        <input type="text"></input>
        <button >Найти</button>
        </span>
    ) 
    
}