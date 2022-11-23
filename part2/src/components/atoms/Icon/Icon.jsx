import React from 'react'
//import classNames from 'classnames';

export const Icon = (props) => {
    const { ...restProps} = props;

    return <img {...restProps} className ='icon' alt ='' />
}