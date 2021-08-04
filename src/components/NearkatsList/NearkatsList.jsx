/* eslint-disable react/prop-types */
import React from 'react';
import NearkatsListItem from './NearkatListItem';

const NearkatsList = ({ kats }) => (
  <ul>
    {kats.length &&
      kats.map((kat) => (
        <li>
          <NearkatsListItem key={kat.id} kat={kat} />
        </li>
      ))}
  </ul>
);

export default NearkatsList;
