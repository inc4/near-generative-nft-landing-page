import React from 'react';
import PropTypes from 'prop-types';
import NearkatsListItem from './NearkatListItem';

const NearkatsList = ({ kats }) => (
  <ul className="nearkats-list">
    {kats.length &&
      kats.map((kat) => <NearkatsListItem key={kat.id} kat={kat} />)}
  </ul>
);

NearkatsList.propTypes = {
  kats: PropTypes.array,
};

NearkatsList.defaultProps = {
  kats: [],
};

export default NearkatsList;
