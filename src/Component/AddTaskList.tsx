import React from 'react';
import { AddTodoProps } from '../Types';

const AddTaskList = ({
    handleSubmit,
    task,
    handleChange,
  }: AddTodoProps)  => {
    return (
        <div>
           <form  onSubmit={handleSubmit}>
               <input type="text" value={task}  onChange={handleChange}/>
               <button>Add Task</button>
           </form> 
        </div>
    );
};

export default AddTaskList;