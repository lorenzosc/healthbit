import React, { useState } from 'react';
import FormGroup from './FormGroup';
import SelectGroup from './SelectGroup';
import RadioGroup from './RadioGroup';

import { stateOptions } from '../options/StateOptions';
import { systolicPressureOptions, diastolicPressureOptions } from '../options/PressureOptions';
import { dayOptions, monthOptions, yearOptions } from '../options/DateOptions';


const PageOne = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    })
  }

  return (
    <div className="form-container">
      <FormGroup label="Nome completo" name="name" value={formData.name} onChange={handleChange} />
      <FormGroup label="Matrícula/CPF" name="cpf" value={formData.cpf} onChange={handleChange} />
      <FormGroup label="Cargo" name="occupation" value={formData.occupation} onChange={handleChange} />
      <FormGroup label="Cidade" name="city" value={formData.city} onChange={handleChange} />
      
      <SelectGroup label="Estado" name="state" value={formData.state} options={stateOptions} onChange={handleChange} />

      <RadioGroup label="Os dados acima estão corretos?" name="correctData" options={[
        { label: "Sim", value: "sim" },
        { label: "Não", value: "não" }
      ]} onChange={handleChange}
        selectedValue={formData.correctData} />
      
      <FormGroup label="Telefone com DDD" name="phone" value={formData.phone} onChange={handleChange} />
      <FormGroup label="E-mail" name="email" value={formData.email} onChange={handleChange} />

      <div className="form-group">
        <label>Data de nascimento:</label>
        <div className="date-group">
          <SelectGroup name="day" value={formData.day} options={dayOptions} onChange={handleChange} placeholder="Dia" />
          <SelectGroup name="month" value={formData.month} options={monthOptions} onChange={handleChange} placeholder="Mês"/>
          <SelectGroup name="year" value={formData.year} options={yearOptions} onChange={handleChange} placeholder="Ano"/>
        </div>
      </div>

      <RadioGroup label="Sexo biológico" name="sex" options={[
        { label: "Feminino", value: "feminino" },
        { label: "Masculino", value: "masculino" }
      ]} onChange={handleChange}
        selectedValue={formData.sex} />
      
      <FormGroup label="Peso" name="weight" value={formData.weight} onChange={handleChange} />
      <FormGroup label="Altura (em cm)" name="height" value={formData.height} onChange={handleChange} />

      <div className="form-group" style={{"border": "1px solid #ccc", "borderRadius": "5px"}}>
        <label style={{"backgroundColor": "#dbdbdb", "padding": "10px"}}>Pressão Arterial</label>
        <div style={{"paddingLeft": "10px", "paddingRight": "10px"}}>
          <p className="instructions">A pressão arterial é popularmente medida como "máxima x mínima". Exemplos: Se sua pressão costuma ser 12x8,
            selecione máxima: "de 120 a 129" e a mínima "de 80 a 84". Se sua pressão costuma ser 10x6, selecione máxima: "menor que 120"
            e a mínima: "menor que 80".
          </p>
          <SelectGroup label="Pressão sistólica (máxima)" name="systolicPressure" value={formData.systolicPressure} options={systolicPressureOptions} onChange={handleChange} />
          <SelectGroup label="Pressão diastólica (mínima)" name="diastolicPressure" value={formData.diastolicPressure} options={diastolicPressureOptions} onChange={handleChange} />
          <label>
            <input type="checkbox" name="pressureUnknown" onChange={handleCheckboxChange} checked={formData.pressureUnknown}/> Não sei
          </label>
        </div>
      </div>

    </div>
  );
};

export default PageOne;