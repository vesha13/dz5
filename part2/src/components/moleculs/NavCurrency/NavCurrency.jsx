//Блок с курсом валюты под новостями
import React from 'react'

import {Text} from'../../atoms/Text/Text'

export const NavCurrency = (props) => {
    const { curr=[], className, ...restProps} = props;
   

    return <b {...restProps}>
        {curr.map((item,index) =>
        <b key ={index}>
            <Text  className ='bold'>{item.name} </Text>
            <Text>{item.value}</Text>
            <Text className ='grey' >{item.changed}</Text>
        </b>
        )}
    </b>
}