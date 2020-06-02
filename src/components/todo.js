import React from 'react';




const Todo = ({children, checked, onClick}) => {
    return (
        <li onClick={onClick} style={{textDecoration: checked? 'line-through' : 'none' }}>{children}</li>
    );
}

export default Todo;
