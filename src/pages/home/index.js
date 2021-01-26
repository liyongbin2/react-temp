import React, { memo } from 'react'
import { HomeWrapper } from './style'
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

export default memo(function Home (props) {
  const { route } = props;
  return (
    <HomeWrapper>
      <NavLink to='/home/HomeCpage1'>HomeCpage1</NavLink>
      <NavLink to='/home/HomeCpage2'>HomeCpage2</NavLink>
      {renderRoutes(route.routes)}
    </HomeWrapper>
  )
})
