import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { HomeCpageWrapper1 } from './style'
import { getHomeCtxAction } from './store/actionCreator'

export default memo(function HomeCpage1() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeCtxAction(28654780));
  }, [dispatch])
  const  result = useSelector(state => state.getIn(['resultReducer', 'result']),shallowEqual);
  return (
    <HomeCpageWrapper1>
      home-c-page1
      <p>{result.text}</p>
    </HomeCpageWrapper1>
  )
})
