/* eslint-disable */
import React, { createContext, useReducer } from 'react';

export const StateUtils = (initialState, prefix) => {
  let updatedState;
  const getState = () => updatedState;
  const store = createContext(initialState);
  const { Provider: InnerProvider } = store;

  const updateState = (state, newState, path = '') => {
    // Debugging
    // console.log('updateState', state, path, newState)
    if (path.length === 0) {
      return { ...state, ...newState };
    }
    const pathArr = path.split('.');
    const first = pathArr[0];
    state = { ...state };
    if (!state[first]) {
      state[first] = {};
    }
    if (pathArr.length === 1) {
      state[first] =
        !!newState && typeof newState === 'object' && !Array.isArray(newState)
          ? {
              ...state[first],
              ...newState,
            }
          : newState;
    } else {
      state[first] = {
        ...state[first],
        ...updateState(state[first], newState, pathArr.slice(1).join('.')),
      };
    }

    return state;
  };

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer((_state, payload) => {
      const { path, newState } = payload;
      if (path === undefined) {
        return _state;
      }
      updatedState = updateState(_state, newState, path);
      return updatedState;
    }, initialState);

    const update = (path, newState) => {
      dispatch({ path, newState });
    };
    const wrappedDispatch = (fn) =>
      fn({ update, getState, dispatch: wrappedDispatch });

    return (
      <InnerProvider value={{ update, state, dispatch: wrappedDispatch }}>
        {children}
      </InnerProvider>
    );
  };

  if (prefix) {
    return {
      [`${prefix}Store`]: store,
      [`${prefix.substr(0, 1).toUpperCase() + prefix.substr(1)}Provider`]:
        Provider,
    };
  }

  return { store, Provider };
};
