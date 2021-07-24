import React from 'react'
import PropTypes from 'prop-types';
import { Label, Title } from '../Filter/Filter.styles';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <Title>Find contacts by name:</Title>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;
