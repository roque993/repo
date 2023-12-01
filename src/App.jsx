import { useState } from 'react';
import './App.css';
import { ListaDeTareas } from './Componentes/ListaDeTareas';
import { AgregarTarea } from './Componentes/AgregarTarea';
import {useLista} from './hooks/useLista';

function App() {
    const {
            tareas,
            tareasCount,
            pendingTareasCount,
            handleNewTarea,
            handleDeleteTarea,
            handleCompleteTarea,
            handleUpdateTarea

    } = useLista();   

	return (
		<>
         <div className='card-agregar'>
                <h1>Lista de tareas</h1>
                <div className='contar-tareas'>
                    <h3>Nº de tareas: <span>{tareasCount}</span> </h3>
                    <h3>Pendientes: <span>{pendingTareasCount}</span> </h3>
                </div>

                <div className="agregar-tarea">
                    <h3>Agregar tarea</h3>
                    <AgregarTarea handleNewTarea= {handleNewTarea}/>
                </div>

                 <ListaDeTareas
                 tareas = {tareas}
                 handleUpdateTarea = { handleUpdateTarea}
                 handleDeleteTarea = {handleDeleteTarea}
                 handleCompleteTarea = {handleCompleteTarea}

                 
                 
                 
                 />
                </div>
      
        	
		</>
	);
}

export default App;