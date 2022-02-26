import { Box, Button, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import {TodoListProps }from '../Types'
const TodoList = ({
    todoTask:{id, task, isTaskCompleted },
    handleDeleteTask
}: TodoListProps) => {
    return (
        <Box style={{display:'flex'}} boxShadow="dark-lg" padding='2'>
            <Text boxShadow='dark-lg'  style={{padding:'.5rem', border:'1px solid #8360c3', width:500}}>{task} </Text>
          
            <Button
                height='42px'
                borderRadius='0'
                colorScheme='red'
                aria-label="Delete a todo"
                onClick={() => handleDeleteTask(id)}
            >
              X
            </Button>
            
        
        </Box>
    );
};

export default TodoList;