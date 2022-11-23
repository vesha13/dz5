//Блок снизу
import React from 'react'

import { NavWeater } from '../../moleculs/NavWeather/NavWeater'
import { NavOnline } from '../../moleculs/NavOnline/NavOnline';
import { NavPopular } from '../../moleculs/NavPopular/NavPopular';
import { NavMap } from '../../moleculs/NavMap/NavMap';
import { NavTV } from '../../moleculs/NavTV/NavTV';

export const Bottom = (props) => {
    const {  ...restProps} = props;
    
    return <div className='bottom'>
      <NavWeater weather={restProps.weather} className='weather'/>
      <NavPopular texts={restProps.popular} className='popular' />
      <NavMap texts={restProps.map} className='map'/>
      <NavTV texts={restProps.tv} className='tv'/>
      <NavOnline texts={restProps.online} className='online'/>
    </div>
}