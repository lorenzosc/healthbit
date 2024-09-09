import {systolicPressureOptions, diastolicPressureOptions} from "../options/PressureOptions"
import { stateOptions } from "../options/StateOptions"

export const validatePageOne = (formData) => {
    const errors = {};
  
    if (!formData.name || typeof formData.name !== 'string') {
        errors.name = 'Nome completo deve ser um texto e não vazio.';
      }
      
    if (!formData.cpf || typeof formData.cpf !== 'string') {
      errors.cpf = 'Matrícula/CPF deve ser um texo e não vazio.';
    }
    
    if (!formData.occupation || typeof formData.occupation !== 'string') {
      errors.occupation = 'Cargo deve ser um texo e não vazio.';
    }
  
    if (!formData.city || typeof formData.city !== 'string') {
      errors.city = 'Cidade deve ser um texto e não vazio.';
    }
    
    const validStates = stateOptions.map(option => option.value)
    if (!validStates.includes(formData.state)) {
      errors.state = 'Estado não selecionado.';
    }

    if (!formData.correctData || formData.correctData !== 'sim') {
      errors.city = 'Por favor corrija e confirme os dados acima.';
    }
  
    if (!formData.phone || typeof formData.phone !== 'string') {
      errors.phone = 'Telefone com DDD deve ser um texto e não vazio.';
    }
  
    if (!formData.email || typeof formData.email !== 'string' || !formData.email.includes('@')) {
      errors.email = 'E-mail deve ser válido e conter "@".';
    }

    if (!formData.day || formData.day === '') {
      errors.day = 'Por favor, selecione um dia.';
    }

    if (!formData.month || formData.month === '') {
      errors.month = 'Por favor, selecione um mês.';
    }
  
    if (!formData.year || formData.year === '') {
      errors.year = 'Por favor, selecione um ano.';
    }
  
    if (!formData.weight || !Number.isInteger(Number(formData.weight))) {
      errors.weight = 'Peso deve ser um número inteiro.';
    }

    if (!formData.sex) {
      errors.sex = 'Por favor, selecione o sexo biológico.';
    }
  
    if (!formData.height || !Number.isInteger(Number(formData.height))) {
      errors.height = 'Altura deve ser um número inteiro.';
    }

    const validSystolicPressures = systolicPressureOptions.map(option => option.value)
    if (!validSystolicPressures.includes(formData.systolicPressure)) {
      errors.systolicPressure = 'Pressão sistólica não selecionada.';
    }
    
    const validDiastolicPressures = diastolicPressureOptions.map(option => option.value)
    if (!validDiastolicPressures.includes(formData.diastolicPressure)) {
      errors.diastolicPressure = 'Pressão diastólica não selecionada.';
    }
  
    return errors;
  };
  