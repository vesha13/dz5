
//Блок погода
import React from 'react'
import {Icon} from'../../atoms/Icon/Icon'
import {Text} from'../../atoms/Text/Text'
import classNames from 'classnames'
import { Link } from '../../atoms/Link/Link'

export const NavWeater = (props) => {
    const {weather, className, ...restProps} = props;
    const navClassName = classNames('block', className);

    return <div {...restProps}>
        <Link href=''>Погода</Link>
        {weather.map((item,index) =>
        <div key={index}>
        <Icon src={item.icon} className ={navClassName}/>  
        <Text>{item.num}</Text> 
        <Text>{item.descript}</Text>
        </div> )}
            
    </div>
}