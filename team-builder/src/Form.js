import React, { useState } from 'react';
import './App.css';
import { teamList } from './dummyData.js';

const initialFormValues = { name:'', email:'', role:''}

export default function Form () {
  const [team, setTeam] = useState([teamList])
  const [formValues, setFormValues] = useState(initialFormValues)
  const change = (event) => {
    const {value, name} = event.target

    setFormValues({...formValues, [name]: value})
  }

  const submit = (event) => {
    event.preventDefault()
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeam([...team, newTeamMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className='teamListForm'>
      <h1>Team List</h1>
        {teamList.map((name, idx) => (
          <div key={idx}>
            {name.name} {name.email} {name.role}
          </div>
        ))}
        <form onSubmit={submit}>
          <input
          type='text'
          name='name'
          onChange={change}
          value={formValues.name}
          placeholder='Name'
          />
          <input
          type='text'
          name='email'
          onChange={change}
          value={formValues.email}
          placeholder='Email'
          />
          <select name='role' onChange={change} value={formValues.role}>
            <option value=''>--Select Your Role--</option>
            <option value='Classmate'>Classmate</option>
            <option value='Teacher'>Teacher</option>
            <option value='Alumni'>Alumni</option>
          </select>
          <div className='submit'>
            <button>Submit</button>
          </div>
        </form>
      </div>
  );
}