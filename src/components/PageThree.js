import React, { useState, useEffect } from 'react';

const PageThree = ({ formData, setFormData }) => {
  const [dietTypes, setDietTypes] = useState({});
  const [selectedDiet, setSelectedDiet] = useState('');
  const [foodOptions, setFoodOptions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getAlimentacao')
      .then(response => response.json())
      .then(data => setDietTypes(data))
      .catch(error => console.error('Error fetching diet types:', error));
  }, []);

  const handleDietChange = (e) => {
    const diet = e.target.value;
    setSelectedDiet(diet);
    setFoodOptions(dietTypes[diet] || []);
    setFormData({ ...formData, dietType: diet, foodTypes: [] });
  };

  const handleFoodChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      foodTypes: checked
        ? [...(prevState.foodTypes || []), value]
        : prevState.foodTypes.filter(item => item !== value)
    }));
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Selecione seu tipo de alimentação:</label>
        <select name="dietType" value={selectedDiet} onChange={handleDietChange}>
          <option value="">Selecione...</option>
          {Object.keys(dietTypes).map((diet, index) => (
            <option key={index} value={diet}>{diet}</option>
          ))}
        </select>
      </div>

      {foodOptions.length > 0 && (
        <div className="form-group">
          <label>Preencha os tipos de alimento que você consome diariamente:</label>
          {foodOptions.map((food, index) => (
            <div key={index} className="checkbox-group">
              <label style={{"fontWeight": "normal"}}>
                <input
                  type="checkbox"
                  name="foodTypes"
                  value={food}
                  onChange={handleFoodChange}
                  checked={formData.foodTypes && formData.foodTypes.includes(food)}
                />
                {food}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageThree;
