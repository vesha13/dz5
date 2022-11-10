import React from 'react'
//import classNames from 'classnames';

export const Image = (props) => {
    const { images = [], ...restProps} = props;

    return <div {...restProps}>
        {images.map((item,index) =>
            <img className ='card-img-top' key ={index} src={item.src} alt={item.alt}/>   
        )}
    </div>
}