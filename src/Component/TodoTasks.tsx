import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../Types";
import { data } from "../todoTaskList"
import { v4 as uuidv4 } from "uuid";
import AddTaskList from "./AddTaskList";
import TodoList from "./TodoList";

const TodoTasks = ()  => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState("");
    const todosLength = todos.length;
    const hasTodos = todos.length > 0;
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
        <section style={{display:'flex', flexDirection:'column'}}>
      <AddTaskList
        handleChange={handleChange}
        handleSubmit={handleSubmitTodo}
        task={task}
      />
      <div/>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todoTask={todo}
          handleDeleteTask={handleDeleteTask}
          
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a todo!
        </p>
      )}
      {hasTodos && (
        <p>
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
    );
};

export default TodoTasks;