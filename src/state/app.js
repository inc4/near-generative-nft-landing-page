import { StateUtils } from '../utils/state-utils';
import { initNear } from './near';

const initialState = {
  app: {
    soldOut: false,
    oneCount: 1,
    manyCount: 10,
    revealNearkats: JSON.parse(localStorage.getItem('revealNearkats')) || {},
    nearkatsArray: [],
    linkDropArray: [],
    urlIpfs: '',
  },
  near: {
    initialized: false,
  },
  price: {
    oneNFT: 10,
    manyNFTS: 82,
    tokenStorageFormat: 0,
    discountFormat: 0,
  },
};

export const { appStore, AppProvider } = StateUtils(initialState, 'app');

export const onAppMount =
  () =>
  async ({ dispatch }) => {
    dispatch(initNear());
  };
