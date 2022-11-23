import React from 'react'

export const Image = (props) => {
    const { ...restProps} = props;
    return <img {...restProps} className ='image' alt='тут картинка'></img>
}