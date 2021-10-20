/* eslint-disable no-console */
import { useHistory } from 'react-router-dom';

const useLinkDrop = () => {
  const history = useHistory();

  const createLinkDrop = (count) => {
    console.log('Create LINK DROP:', count);
    history.push('/link-drop');
  };
  return { createLinkDrop };
};

export default useLinkDrop;
