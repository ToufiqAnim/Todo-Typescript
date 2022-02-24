import React from 'react';
import {TodoListProps }from '../Types'
const TodoList = ({
    todoTask:{id, task, isTaskCompleted },
    handleDeleteTask
}: TodoListProps) => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <li >{task} </li>
            <div>
            <button
                aria-label="Delete a todo"
                
                onClick={() => handleDeleteTask(id)}
            >
                X
            </button>
            
            </div>
        </div>
    );
};

export default TodoList;