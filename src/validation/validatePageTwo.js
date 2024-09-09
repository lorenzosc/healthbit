import { conditions } from "../options/ConditionOptions"

export const validatePageTwo = (formData) => {
    const errors = {};
  
    conditions.forEach(condition => {
      if (formData[condition.name].length === 0) {
        errors[condition.label] = `Por favor, selecione pelo menos uma opção para ${condition.label}.`;
      }
    })
      
    return errors;
  };
  