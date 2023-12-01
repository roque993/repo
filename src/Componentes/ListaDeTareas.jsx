import React from 'react'
import { ItemTareas } from './ItemTareas'

export const ListaDeTareas = (  {
   tareas,
   handleUpdateTarea, 
   handleDeleteTarea, 
   handleCompleteTarea
  }) => {
  return (
    <ul>
      {tareas.map(tarea => (
        <ItemTareas
        key = {tarea.id}
        tarea = {tarea}
        handleUpdateTarea = { handleUpdateTarea}
        handleDeleteTarea = {handleDeleteTarea}
        handleCompleteTarea = {handleCompleteTarea}
        />
      ))}
     
    </ul>
    
  )
}

