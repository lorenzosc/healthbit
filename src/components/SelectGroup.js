import React from 'react';

const SelectGroup = ({ label, name, value, options, onChange, placeholder="Selecione..." }) => (
  <div className="form-group">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default SelectGroup;
