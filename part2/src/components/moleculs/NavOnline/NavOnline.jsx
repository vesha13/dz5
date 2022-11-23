
//Блок Эфиры
import React from 'react'
import {Icon} from'../../atoms/Icon/Icon'
import {Link} from'../../atoms/Link/Link'
import {Text} from'../../atoms/Text/Text'
import icon from '../../../baseline_grid_view_black_24dp.png'
import classNames from 'classnames'

export const NavOnline = (props) => {
    const {texts =[], className, ...restProps} = props;
    const navClassName = classNames('block', className);

    return <div {...restProps}>
            <Link href=''>Эфиры</Link> 

                   {texts.map((item,index) =>
                   <div key ={index}>
                   <Icon  src={icon} className ={navClassName}/>   
                    <Text> {item.name} 
                    <Text className ={navClassName}>{item.about}</Text>
                    </Text>
                    </div>)}
           
    </div>
}