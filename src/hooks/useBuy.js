import { useState, useEffect, useContext } from 'react';
import useMintNft from './useMintNft';
import useLinkDrop from './useLinkDrop';
import { appStore } from '../state/app';

const useBuy = (isLinkDrop) => {
  const { state } = useContext(appStore);

  const { mintNft } = useMintNft();
  const { createLinkDrop } = useLinkDrop();

  const text = isLinkDrop ? 'Generate gift links' : 'Buy more';

  const [count, setCount] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [showCountAnimation, setShowCountAnimation] = useState('');

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return undefined;
  }, [showMessage]);

  const handleClick = async () => {
    if (!count) {
      setShowMessage(true);
    } else {
      // eslint-disable-next-line no-unused-expressions
      isLinkDrop ? createLinkDrop(count) : mintNft(count);
    }
  };

  const handleNumberClick = (number) => {
    if (count === number) {
      return;
    }

    setCount(number);
    setShowCountAnimation('generate-block__animation-hide');

    setTimeout(
      () => setShowCountAnimation('generate-block__animation-price'),
      0,
    );
  };

  return {
    text,
    count,
    state,
    showMessage,
    setShowMessage,
    showCountAnimation,
    handleClick,
    handleNumberClick,
  };
};

export default useBuy;
