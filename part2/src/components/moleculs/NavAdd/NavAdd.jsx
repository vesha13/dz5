//Блок с рекламой спрва вверху
import React from 'react'
import { Text } from '../../atoms/Text/Text'
import { Icon } from '../../atoms/Icon/Icon'
import {Link} from '../../atoms/Link/Link'

import classNames from 'classnames'

export const NavAdd = (props) => {
    const {add =[], className, ...restProps} = props;
    const navClassName = classNames('block', className);

    return <b {...restProps}>
    {add.map((item,index) =>
        <div key ={index}><Icon  src={item.icon} className ={navClassName}/> 
        <div><Link  href = {item.link}  >{item.name}</Link></div>
        <div><Text>{item.text}</Text></div>
        </div>
    )}
</b>
}