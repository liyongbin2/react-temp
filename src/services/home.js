import request from './request';

export function getVideo(sid) {
  return request({
    url: '/getSingleJoke',
    params: {
      sid
    }
  })
}