//Блок в середине
import React from 'react'
import { NavLinks } from '../../moleculs/NavLinks/NavLinks';
import { NavInput } from '../../moleculs/NavInput/NavInput';
import { Image } from '../../moleculs/Image/Image';


export const Middle = (props) => {
    const { ...restProps} = props;
    
    return <div className='middle'>
      <NavLinks links={restProps.links} className='small'/>
      <NavInput image={restProps.yandex} greytext={restProps.text} />
      <Image src={restProps.image}/>
    </div>
}