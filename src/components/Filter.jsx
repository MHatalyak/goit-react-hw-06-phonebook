import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './store';
import { FilterContainer, FilterLabel, FilterInput } from './App.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <FilterContainer>
      <FilterLabel>Filter contacts by name:</FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
