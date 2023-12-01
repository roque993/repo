import {useEffect, useReducer} from "react"
import { ListaReducer } from "../ListaReducer";
export const useLista = (  ) => {

    const initialState = [];
    const init = () => {
        return JSON.parse(localStorage.getItem('tareas')) || []

    }

    const [tareas, dispatch] = useReducer(
        ListaReducer,
         initialState,
         init
         )

         const tareasCount = tareas.length
         const pendingTareasCount = tareas.filter(tarea => !tarea.done).length

        useEffect (()   => {
            localStorage.setItem('tareas', JSON.stringify(tareas))

        }, [tareas])





    const handleNewTarea = tarea => {
        const action ={
            type : "Add Tarea",
            payload : tarea,

        }
        dispatch (action)
    }
    const handleDeleteTarea = id => {
        const action = {
            type: "Delete Tarea",
            payload : id
        }
        dispatch (action)
    }
    const handleCompleteTarea = id => {
        const action = {
            type : 'Complete Tarea',
            payload: id,
        }
        dispatch (action);
    }
    const handleUpdateTarea = (id, description) => {
        const action = {
            type: 'Update Tarea',
            payload: {
                id,
                description,
            }
        }
        dispatch (action);
        
        }
        return{
            tareas,
            tareasCount,
            pendingTareasCount,
            handleNewTarea,
            handleDeleteTarea,
            handleCompleteTarea,
            handleUpdateTarea
            
        }

    }

