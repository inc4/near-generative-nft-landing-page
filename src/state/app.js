// eslint-disable-next-line import/no-unresolved
import { StateUtils } from '../utils/state-utils';
import { initNear } from './near';

const initialState = {
  app: {},
  near: {
    initialized: false,
  },
};

export const { appStore, AppProvider } = StateUtils(initialState, 'app');

export const onAppMount =
  () =>
  async ({ dispatch }) => {
    dispatch(initNear());
  };
