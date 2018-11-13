'use strict'

//Redux core light (comverted from ES6 using babeljs.io)
const Redux = {};
Redux.createStore = function (reducer) {
  let state = void 0;
  let listeners = [];
  const getState = function getState() {
    return state;
  };
  const dispatch = function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(function (l) {
      return l();
    });
  };
  const subscribe = function subscribe(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter(function (l) {
        return l !== listener;
      });
    };
  };
  dispatch({});
  return { getState: getState, dispatch: dispatch, subscribe: subscribe };
};
