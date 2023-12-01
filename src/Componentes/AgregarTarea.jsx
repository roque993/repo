import React from 'react'
import { useForm } from '../hooks/useForm'

export const AgregarTarea = ({handleNewTarea}) => {

  const {description, onInputChange,onResetForm} = useForm({
    description: '',

  })

const onFormSubmit = e => {
    e.preventDefault()

    if (description.length <=1) return

    let newTarea = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    handleNewTarea(newTarea);
    onResetForm();

}



  return (
    
    <form onSubmit={onFormSubmit} >
        <input type="text"  
        className='input-add'
         name='description' 
         value={description}
         onChange={onInputChange}
         placeholder='que hay que hacer'
         />
         <button className='btn-add'type='submit'>
            Agregar
          </button>
    </form>
  )
}
