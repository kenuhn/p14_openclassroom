import React from 'react';

const SelectInput = (props) => {
    const { states, departements, register, ...restProps } = props;
    const name = props.states ? "states" : "departements"
    const options = (states ?? departements)?.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));
  
    return (
      <select {...register(`${name}`)} {...restProps} 
      className="custom-select"
      >
        {options}
      </select>
    );
  };
  
  export default SelectInput;