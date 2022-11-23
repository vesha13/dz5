
//Блок с новостями наверху
import React from 'react'
import { Text } from '../../atoms/Text/Text'
import { Icon } from '../../atoms/Icon/Icon'



import classNames from 'classnames'

export const NavNews = (props) => {
    const { news = [], className, ...restProps} = props;
    const navClassName = classNames('block', className);

    return <div {...restProps}>
        {news.map((item,index) =>
            <div key ={index}><Icon  src={item.icon} className ={navClassName}/> 
            <Text className ={navClassName}> {item.text}</Text>  
            </div>
        )}
    </div>
}