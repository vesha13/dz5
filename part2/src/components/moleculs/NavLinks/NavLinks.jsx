//Блок ссылок, как в самом вверзу, так и над поиском

import React from 'react'

import {Link} from'../../atoms/Link/Link'
import classNames from 'classnames'

export const NavLinks = (props) => {
    const { links=[], className, ...restProps} = props;
    const navClassName = classNames('links', className);

    return <b {...restProps}>
        {links.map((item,index) =>
            <Link key ={index} href = {item.link} className ={navClassName} >{item.name}</Link>
        )}
    </b>
}