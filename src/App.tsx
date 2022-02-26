import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTask from './Component/TodoTasks';
import TodoTasks from './Component/TodoTasks';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  
  return (
    <div className="App">
      <ChakraProvider>
      <TodoTasks/>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
