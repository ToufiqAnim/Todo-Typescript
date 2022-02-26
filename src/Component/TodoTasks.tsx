import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Todo } from "../Types";
import { data } from "../todoTaskList"
import { v4 as uuidv4 } from "uuid";
import AddTaskList from "./AddTaskList";
import TodoList from "./TodoList";
import { Box, Container, Text } from "@chakra-ui/react";
import './TodoTask.css'
const TodoTasks = ()  => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState("");
    const todosLength = todos.length;
    const todosAdded = todos.length > 0;
    const remainingTodos = todos.filter((todo) =>!todo.isTaskCompleted).length;
    
 

    const handleDeleteTask = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
      }
    
      const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]
        setTodos(updatedTodos)
        setTask("")
      }
    
      const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement
        setTask(value)
      }
    
      const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault()
    
        const todo = {
          id:uuidv4(),
          task: task,
          isTaskCompleted: false,
        }
        task && handleAddTodo(todo)
      }
    return (
    <Container maxW='container.lg' style={{display:'flex', flexDirection:'column',  alignItems:'center'}} boxShadow='dark-lg' padding="20" width="100%" height='90vh' className="task-container">
      <AddTaskList
        handleChange={handleChange}
        handleSubmit={handleSubmitTodo}
        task={task}
      />
      <div/>
   <Box>
    
   {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todoTask={todo}
          handleDeleteTask={handleDeleteTask}
          
        />
      ))}
   </Box>
      {!todosAdded && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add Yor Task!
        </p>
      )}
      {todosAdded && (
        <p>
          {remainingTodos} of {todosLength} todos remaining
        </p>
      )}
    </Container>
    );
};

export default TodoTasks;