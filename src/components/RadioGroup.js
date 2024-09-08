import React from 'react';

const RadioGroup = ({ label, name, options, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="radio-group">
      {options.map((option, index) => (
        <label key={index}>
          <input type="radio" name={name} value={option.value} onChange={onChange} /> {option.label}
        </label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
