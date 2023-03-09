import React from 'react';
import { FilterInput, FilterTitle } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from '../redux/contactSlice';

import { InputName } from 'components/ContactForm/ContactForm.styled';
import { getFilter } from 'components/redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function filterName(event) {
    dispatch(filterContacts(event.currentTarget.value));
  }

  return (
    <FilterTitle>
      <InputName>Filter</InputName>
      <FilterInput type="text" value={filter} onChange={filterName} />
    </FilterTitle>
  );
};

export default Filter;
