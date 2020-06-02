import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/todo';
import checkTodo from '../actions/checkTodo'

const TodoList = ({ todos, checkTodo }) => {

    const handleClick = (id) => {
        checkTodo(id);
    }

    console.log(todos)

    let taskList = todos.map(task => {
    return <Todo key={task.id} checked={task.checked} onClick={() => handleClick(task.id)}>{task.text}</Todo>
    })

    return (
        <ul>
           {taskList}
        </ul>
    );
}


const filterTodos = (filter , tasks) => {
    switch(filter){
        case 'All':
            return tasks;
        case 'Done':
            return tasks.filter(task => task.checked)
        case 'Undone':
            return tasks.filter(task => !task.checked)
        default:
            return tasks
    }
}



const mapStateToProps = state => (
    console.log(state),
    {
        todos: filterTodos(state.filter, state.todo)
    }
)

const mapDispatchToProps = dispatch => ({
    checkTodo: (id) => dispatch(checkTodo(id))
})

// const mapDispatchToProps = {
//     checkTodo
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
