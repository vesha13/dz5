//Блок карты внизу

import React from 'react'

import {Link} from'../../atoms/Link/Link'
import {Text} from'../../atoms/Text/Text'
import classNames from 'classnames'

export const NavMap = (props) => {
    const { texts =[], className, ...restProps} = props;
    const navClassName = classNames('block', className);

    return <div {...restProps}>
            <Link className ={navClassName} href=''>Карты </Link>
            {texts.map((item,index) =>
            <div><Text key ={index} className ={navClassName}> {item.text}</Text></div>)}
    </div>
}