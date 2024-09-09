import React from 'react';
import {conditions, conditionAlreadyHad, conditionNotKnow} from '../options/ConditionOptions'

const PageTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: checked 
        ? [...(prevState[name] || []), value]
        : prevState[name].filter(item => item !== value)
    }));
  };

  return (
    <div className="form-container">
      <h3>Preencha apenas as doenças que você tem ou já teve</h3>
      <small className="instructions">(Você pode selecionar mais de um campo por resposta)</small> 
      <br />
      <br />
      <div className="conditions-grid">
        {conditions.map((condition) => (
          <div key={condition.name} className="condition-group">
            <label className="condition-group-label">{condition.label}</label>
            <div>
              <label>
                <input 
                  type="checkbox" 
                  name={condition.name} 
                  value="Tenho" 
                  onChange={handleChange} 
                  checked={formData[condition.name]?.includes("Tenho")}
                />
                Tenho
              </label>
              <label>
                <input 
                  type="checkbox" 
                  name={condition.name} 
                  value="Não tenho" 
                  onChange={handleChange} 
                  checked={formData[condition.name]?.includes("Não tenho")}
                />
                Não tenho
              </label>
              {conditionNotKnow.includes(condition.name) ? (
                <label>
                  <input 
                    type="checkbox" 
                    name={condition.name} 
                    value="Não sei" onChange={handleChange} 
                    checked={formData[condition.name]?.includes("Não sei")}
                  />
                  Não sei
                </label>
              ) : null}
              {conditionAlreadyHad.includes(condition.name) ? (
                <label>
                  <input 
                    type="checkbox" 
                    name={condition.name} 
                    value="Já tive, mas me curei" 
                    onChange={handleChange} 
                    checked={formData[condition.name]?.includes("Já tive, mas me curei")} 
                  />
                  Já tive, mas me curei
                </label>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="form-group">
        <label>Outros</label>
        <input type="text" name="otherConditions" value={formData.otherConditions || ''} onChange={handleChange} />
      </div>
    </div>
  );
};

export default PageTwo;
