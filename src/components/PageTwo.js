import React from 'react';

const PageTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const conditions = [
    { name: 'diabetes', label: 'Diabetes' },
    { name: 'cardiacProblems', label: 'Problemas Cardíacos' },
    { name: 'highBloodPressure', label: 'Pressão Alta' },
    { name: 'asthma', label: 'Asma' },
    { name: 'depression', label: 'Depressão' },
    { name: 'anxiety', label: 'Ansiedade' },
    { name: 'highCholesterol', label: 'Colesterol Alto' },
    { name: 'backPain', label: 'Dores nas Costas' },
    { name: 'jointPain', label: 'Dores nas Articulações' },
    { name: 'headache', label: 'Dores de Cabeça' },
    { name: 'cancer', label: 'Câncer' },
    { name: 'stds', label: 'Infecções Sexualmente Transmissíveis' },
  ];

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
                <input type="radio" name={condition.name} value="Tenho" onChange={handleChange} />
                Tenho
              </label>
              <label>
                <input type="radio" name={condition.name} value="Não tenho" onChange={handleChange} />
                Não tenho
              </label>
              {condition.name === 'Diabetes' || condition.name === 'highBloodPressure' ||condition.name === 'highCholesterol'? (
                <label>
                  <input type="radio" name={condition.name} value="Não sei" onChange={handleChange} />
                  Não sei
                </label>
              ) : null}
              {condition.name === 'cardiacProblems' || condition.name === 'backPain' || condition.name === 'jointPain' || condition.name === 'headache' || condition.name === 'cancer' || condition.name === 'stds' ? (
                <label>
                  <input type="radio" name={condition.name} value="Já tive, mas me curei" onChange={handleChange} />
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
