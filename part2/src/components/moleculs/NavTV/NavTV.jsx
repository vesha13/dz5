//Блок Телепередача
import React from 'react'
import {Link} from'../../atoms/Link/Link'
import {Text} from'../../atoms/Text/Text'
import { Icon } from '../../atoms/Icon/Icon'
import icon from '../../../baseline_grid_view_black_24dp.png'
import classNames from 'classnames'

export const NavTV = (props) => {
    const { texts =[], className, ...restProps} = props;
    const navClassName = classNames('block', className);

    return <div {...restProps}>
            <b><Link href=''>Телепрограмма </Link>
                <Icon src={icon}/>
            </b>
            {texts.map((item,index) =>
                    <div><Text key ={index} > {item.time} {item.name} 
                    <Text className ={navClassName}>{item.chanel}</Text>
                    </Text></div>)}
       
    </div>
}