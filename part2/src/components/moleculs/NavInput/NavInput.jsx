//Блок поиска (сама строка +изображение яндекса+ пример ввода)
import React from 'react'
import { Text } from '../../atoms/Text/Text'
import { Input } from '../../atoms/Input/Input'
import { Image } from '../../moleculs/Image/Image'

import classNames from 'classnames'

export const NavInput = (props) => {
    const {image, greytext, className, ...restProps} = props;
    const navClassName = classNames('input', className);

    return <b {...restProps}>
        
            <Image src={image} className ={navClassName}/>   
            <Input/> 
            <div><Text >Найдётся всё. Например,<Text  className ={navClassName}>{greytext}</Text> </Text></div>
    </b>
}