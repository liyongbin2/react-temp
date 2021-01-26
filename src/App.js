import React, { memo, Suspense } from 'react';
import {
  Provider
} from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import routes from '@/router/index';
import store from '@/store';
import './App.css';

export default memo(function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <div className="App-header">
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/about'>about</NavLink>
            {/* Suspense用于当界面还没加载出来时显示的东西，这里可以传入一个组件 */}
            <Suspense fallback={<div>page loading</div>}>
              {renderRoutes(routes)}
            </Suspense>
            <p className="App-link">
              ybin-React-temp
             </p>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
});
