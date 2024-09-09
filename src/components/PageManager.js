import React, { useState } from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import { validatePageOne } from '../validation/validatePageOne';
import { validatePageTwo } from '../validation/validatePageTwo';
import { validatePageThree } from '../validation/validatePageThree';

const CompleteForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      cpf: '',
      occupation: '',
      city: '',
      state: '',
      correctData: '',
      phone: '',
      email: '',
      day: '',
      month: '',
      year: '',
      sex: '',
      weight: '',
      height: '',
      systolicPressure: '',
      diastolicPressure: '',
      pressureUnknown: false,
      diabetes: [],
      cardiacProblems: [],
      highBloodPressure: [],
      asthma: [],
      depression: [],
      anxiety: [],
      highCholesterol: [],
      backPain: [],
      jointPain: [],
      headache: [],
      cancer: [],
      stds: [],
      dietType: '',
      foodTypes: []
    });

    const [errors, setErrors] = useState({});
  
  
    const nextStep = () => {
      let currentErrors = {};

      switch (step){
        case 1:
          currentErrors = validatePageOne(formData);
          break;
        case 2:
          currentErrors = validatePageTwo(formData);
          break;
        case 3:
          currentErrors = validatePageThree(formData);
          break;
        default:
          throw new Error('Unknown step: ' + step);
      }
      
      setErrors(currentErrors)

      if (Object.keys(currentErrors).length === 0) {
        setStep(step + 1);
      } 
    }
    const prevStep = () => {
      setErrors({})
      setStep(step - 1);
    }
  
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      let currentErrors = {};
      currentErrors = { ...currentErrors, ...validatePageOne(formData) };
      currentErrors = { ...currentErrors, ...validatePageTwo(formData) };
      currentErrors = { ...currentErrors, ...validatePageThree(formData) };

      if (Object.keys(currentErrors).length === 0) {
        setIsSubmitting(true)
        try {
          const response = await fetch('http://localhost:5000/submitFormulario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), 
          });
    
          if (response.ok) {
            console.log('Form submitted successfully');
          } else {
            console.error('Error submitting the form:', response.statusText);
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setErrors(currentErrors);
      }
    };
  
    return (
      <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="step-content">
          {step === 1 && <PageOne formData={formData} setFormData={setFormData} />}
          {step === 2 && <PageTwo formData={formData} setFormData={setFormData} />}
          {step === 3 && <PageThree formData={formData} setFormData={setFormData} />}
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="error-summary">
            <h4>Por favor, corrija os seguintes erros:</h4>
            <ul>
              {Object.keys(errors).map((key) => (
                <li key={key}>{errors[key]}</li>
              ))}
            </ul>
          </div>
        )}


        <div className="navigation-buttons">
          {step > 1 && <button className="prev-button" type="button" onClick={prevStep}>Anterior</button>}
          {step < 3 && <button className="next-button" type="button" onClick={nextStep}>Próximo</button>}
          {step === 3 && 
            <button 
              className="next-button" 
              type="submit" 
              onClick={handleSubmit} 
              disabled={isSubmitting}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          }
        </div>
      </form>
    </div>
    );
  };
  
  export default CompleteForm;