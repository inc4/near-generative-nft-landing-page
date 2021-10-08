/* eslint-disable no-console */
import React, { useContext } from 'react';
import NftItem from '../NftItem';
import { appStore } from '../../state/app';

const NftList = () => {
  const { state, update } = useContext(appStore);
  const { app } = state;
  console.log('state:', state);

  const handleClick = (index) => {
    const newArr = app.nearkats.map((item, i) =>
      i === index ? { ...item, reveal: true } : item,
    );
    update('app', { nearkats: newArr });
    localStorage.setItem('nearkats', JSON.stringify(newArr));
    console.log('newArr', newArr);
  };

  // const nearkatsArr = JSON.stringify(localStorage.nearkats) || [];
  // const newNearkatsArr = dataGenerate(app.lastGenerate);
  // nearkatsArr.push(...newNearkatsArr);
  // console.log(nearkatsArr, newNearkatsArr);

  return (
    <div className="nfts-list">
      {app.nearkats.map((item, index) => (
        <NftItem
          key={item.key}
          item={item}
          index={index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default NftList;
