import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { TareasActualizar } from './TareasActualizar';



export const ItemTareas = ({
   tarea,
   handleUpdateTarea, 
   handleDeleteTarea, 
   handleCompleteTarea
}) => {
  return (
    <li>
        <span onClick={() => handleCompleteTarea(tarea.id)}>
            <label className={`container-done ${tarea.done ? 'active' : ''}`}></label>
        </span>
        <TareasActualizar tarea={tarea} handleUpdateTarea={handleUpdateTarea}/>
        <button className='btn-delete' onClick={()=> handleDeleteTarea(tarea.id)}><FaRegTrashCan /></button>
    </li>
  )
}
