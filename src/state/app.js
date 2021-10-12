// eslint-disable-next-line import/no-unresolved
import { StateUtils } from '../utils/state-utils';
import { initNear } from './near';

const initialState = {
  app: {
    lastGenerate: 0,
    nftsCount: +localStorage.getItem('nftsCount') || 0,
    nearkats: JSON.parse(localStorage.getItem('nearkats')) || [],
    soldOut: false,
    linksLastGenerate: 0,
    linksNftsCount: +localStorage.getItem('linksNftsCount') || 0,
    linksNearkats: JSON.parse(localStorage.getItem('linksNearkats')) || [],
  },
  near: {
    initialized: false,
  },
  price: {
    oneToken: 5,
    tenToken: 45,
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
