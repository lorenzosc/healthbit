export const validatePageThree = (formData) => {
    const errors = {};

    if (!formData.dietType || formData.dietType === '') {
      errors.dietType = 'Por favor, selecione um tipo de alimentação.';
    }

    if (!formData.foodTypes || formData.foodTypes.length === 0) {
      errors.foodTypes = 'Por favor, selecione pelo menos um tipo de alimento.';
    }
  
    return errors;
  };
  