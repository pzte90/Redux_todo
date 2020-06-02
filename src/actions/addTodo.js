let id = 0;
const addTodo = text => (
    {
        type:"ADD_TODO",
        id: id++,
        checked: false,
        text
    }
)

export default addTodo