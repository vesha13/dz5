//Блок сверху 
import React from 'react'
import { NavLinks } from '../../moleculs/NavLinks/NavLinks'

import { NavNews } from '../../moleculs/NavNews/NavNews'
import { NavCurrency } from '../../moleculs/NavCurrency/NavCurrency'
import { NavAdd } from '../../moleculs/NavAdd/NavAdd'


export const Top = (props) => {
    const {  ...restProps} = props;
    const date = new Date();

    return <div className='top'>
      <div>
        <b>
            <NavLinks links={restProps.links} className='huge'/>
            <b className='date'>{date.getDate()}</b>
        </b>
       <NavNews news ={restProps.news} className="news"/>
       <NavCurrency curr= {restProps.curr}></NavCurrency>
      </div>
      <NavAdd  add ={restProps.add} className="add"></NavAdd>
    </div>
}