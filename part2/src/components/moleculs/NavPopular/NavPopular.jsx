//Блок Посещаемое
import React from 'react'

import {Link} from'../../atoms/Link/Link'
import {Text} from'../../atoms/Text/Text'
import classNames from 'classnames'

export const NavPopular = (props) => {
    const { texts =[], className, ...restProps} = props;
    const navClassName = classNames('block',  className);

    return <div {...restProps}>
            <Link href='' >Посещаемое</Link>
            {texts.map((item,index) =>
                   <div> <Text key ={index} > {item.name} 
                    <Text className ={navClassName}>{item.about}</Text>
                    </Text></div>)}
    </div>
}