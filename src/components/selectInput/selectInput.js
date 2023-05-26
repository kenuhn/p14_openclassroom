import React from 'react';

const SelectInput = (props) => {
    const { state, department, register, ...restProps } = props;
    const name = props.state ? "state" : "department"
    const options = (state ?? department)?.map((value) => (
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