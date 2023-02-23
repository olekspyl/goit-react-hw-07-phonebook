import React from "react";
import {useDispatch, useSelector} from "react-redux"; 
import { selectFilter } from "redux/contacts/selector";
import { changeFilter } from 'redux/contacts/filterSlice';


const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={
          e => dispatch(changeFilter(e.target.value))
        }
      />
    </label>
  )
};

export default Filter;

 