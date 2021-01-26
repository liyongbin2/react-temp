import * as actionsTypes from './constants'

// 使用immutablejs提高性能，它会对...state的拷贝进行优化
import { Map } from 'immutable'

// 使用immutablejs写的代码
const defaultState = Map({
  result2: []
});

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.CHANGE_HOME_CTX2:
      return state.set('result',action.result2);
      
    default:
      return state;
  }
}
export default reducer