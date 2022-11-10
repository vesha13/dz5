import React from 'react'

export const Header = (props) => {
    const { headers= [], ...restProps} = props;
   
    return <div {...restProps}>
        {headers.map((item,index) =>
            <div className ='card-header'  key ={index} >{item.header} </div> )}
    </div>
}