import React from 'react'
import { Text } from '../../atoms/Text/Text'
import { Title } from '../../atoms/Title/Title'
import {Link} from'../../atoms/Link/Link'
import classNames from 'classnames'

export const CardBody = (props) => {
    const { titels = [], texts=[],links=[], className, ...restProps} = props;
    const navClassName = classNames('card-', className);

    return <div {...restProps}>
        {titels.map((item,index) =>
            <Title key ={index} className ={navClassName} size={5} >{item.title}</Title>)}
        {texts.map((item,index) =>
            <Text key ={index} className ={navClassName}> {item.text}</Text>)}
        {links.map((item,index) =>
            <Link key ={index} href = {item.link} >{item.name}</Link>
        )}
    </div>
}