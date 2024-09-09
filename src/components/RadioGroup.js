import React from 'react';

const RadioGroup = ({ label, name, options, onChange, selectedValue }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="radio-group">
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input type="radio" name={name} value={option.value} onChange={onChange} checked={selectedValue === option.value}/> {option.label} 
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default RadioGroup;
