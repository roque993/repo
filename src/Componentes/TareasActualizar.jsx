import React, { useRef, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { useForm } from '../hooks/useForm';


export const TareasActualizar = ({tarea, handleUpdateTarea}) => {

    const   { updateDescription,onInputChange} = useForm({
        updateDescription: tarea.description

    });
    const [disabled, setDisabled] = useState(true)
    const focusInputRef = useRef()




    const onSubmitUpdate = e => {
        e.preventDefault()

        const id= tarea.id
        const description = updateDescription
        handleUpdateTarea (id, description)

        setDisabled(!disabled)

        focusInputRef.current.focus()



    }


  return (
    <form onSubmit={onSubmitUpdate} >
        <input 
             type='text'  
             className= {`input-update ${tarea.done ? 'text-decoration-dashed' : ''
            }`}
            
             name='updateDescription' 
             value={updateDescription}
             onChange={onInputChange}
             placeholder='que hay que hacer'
             readOnly={disabled}
             ref ={focusInputRef}
         />
         <button className='btn-edit'type='submit'>
             <CiEdit />
          </button>
    </form>
  )
}
