export const ListaReducer = (initialState, action) => {

        switch (action.type){
            case 'Add Tarea':
                return [...initialState, action.payload];
                
            case 'Delete Tarea':
                return initialState.filter(tarea => tarea.id !== action.payload);

            case 'Complete Tarea':
                return initialState.map(tarea => {
                    if (tarea.id === action.payload) {
                        return {
                            ...tarea,
                            done: !tarea.done,
                        };
                    }
    
                    return tarea;
                   
                });
            case 'Update Tarea':
                return initialState.map(tarea => {
                    if (tarea.id === action.payload.id) {
                        return {
                            ...tarea,
                            description: action.payload.description,
                        };
                    }
    
                    return tarea;
                });
                default:
                    return initialState
            
    }
}