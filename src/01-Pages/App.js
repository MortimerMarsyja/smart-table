// Deps
import React, { Suspense } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// logo
// styles
import GlobalStyle from '../07-Styles/global.style';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
// Paths
import PATHS from '../04-Constants/Routes';
// Components
import Icon from '../00-Components/IconComponent/Icon';
// Reducers
import rootReducer from '../03-Reducers/rootReducer';
// Constant
import iconList from '../04-Constants/svg/iconList';

// Pages
const MainPage = React.lazy(() => import('./MainPage/MainPage'));
const OutOfBounds = React.lazy(() => import('./OutOfBounds/OutOfBoundsPage'));

const createReduxStore = () => {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
};

const COMPONENT_PATHS = [
  { Component: MainPage, path: PATHS.MAIN_PAGE },
  { Component: OutOfBounds, path: PATHS.OUT_OF_BOUNDS },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={createReduxStore()}>
        <BrowserRouter>
          <Switch>
            {COMPONENT_PATHS.map(({ path, Component }) => (
              <Route path={path} exact key={path}>
                <Suspense fallback={(
                  <div>
                    Loading...
                    <Icon size="32px" icon={iconList.llama} color="red" />
                  </div>
                )}
                >
                  <Component />
                </Suspense>
              </Route>
            ))}
            <Redirect to={PATHS.OUT_OF_BOUNDS} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
