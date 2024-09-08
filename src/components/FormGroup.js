import React from 'react';

const FormGroup = ({ label, name, type = "text", value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} />
  </div>
);

export default FormGroup;
