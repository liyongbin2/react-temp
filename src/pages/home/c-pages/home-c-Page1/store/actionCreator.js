import * as actionsTypes from './constants';
import {
  getVideo,
} from '@/services/home';

const changeGetHomeCtxAction= (res) => ({
  type: actionsTypes.CHANGE_HOME_CTX,
  result: res.result
})

export const getHomeCtxAction = sid => {
  return async dispatch => {
    const res = await getVideo(sid);
    dispatch(changeGetHomeCtxAction(res))
  }
}

