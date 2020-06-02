const todo = (state=[], action) => {
    switch(action.type){
        case "ADD_TODO": 
            return[
                ...state,
                {
                    id: action.id,
                    checked: action.checked,
                    text: action.text
                }
            ];
        case "TOGGLE_TODO":
            const tasks = [...state]
            return tasks.map(task => {
                if(task.id === action.id){
                    task.checked = !task.checked
                    return task
                }else{
                    return task
                }
            })
        case "REMOVE_TODO":
            const removeTasks = [...state]
            return removeTasks.filter(task => {
                if(task.checked === action.checked){
                    return task
                }
            })

        default:
            return state
    }
}

export default todo