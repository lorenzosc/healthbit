import React, { useState } from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

const CompleteForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      cpf: '',
      occupation: '',
      city: '',
      state: '',
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
    });
  
  
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // You can add form submission logic here (e.g., API call)
    };
  
    return (
      <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="step-content">
          {step === 1 && <PageOne formData={formData} setFormData={setFormData} />}
          {step === 2 && <PageTwo formData={formData} setFormData={setFormData} />}
          {step === 3 && <PageThree formData={formData} setFormData={setFormData} />}
        </div>
        <div className="navigation-buttons">
          {step > 1 && <button className="prev-button" type="button" onClick={prevStep}>Anterior</button>}
          {step < 3 && <button className="next-button" type="button" onClick={nextStep}>Próximo</button>}
          {step === 3 && <button className="next-button" type="submit">Submit</button>}
        </div>
      </form>
    </div>
    );
  };
  
  export default CompleteForm;