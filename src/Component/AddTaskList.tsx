import { Box, Button, Container, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { AddTodoProps } from '../Types';

const AddTaskList = ({
    handleSubmit,
    task,
    handleChange,
  }: AddTodoProps)  => {
    return (
        <Box marginBottom='16'className='add-task' >
   
           <Text fontSize="3xl" marginBottom='3' textAlign='center'>Task Manager</Text>
           <form onSubmit={handleSubmit} style={{display:'flex', alignItems:'center'}}>
               <Input border='1px'
                borderRadius="0px"
                padding='6'
                borderColor='#5017ed'
                 type="text" value={task}  onChange={handleChange} width="700px" />

               <Button type='submit' borderRadius="0px" height='50px' width='80px' style={{background:'#8260c3',fontWeight:'bold', fontSize:'25px'}}>+</Button>
           </form> 
         
        </Box>
    );
};

export default AddTaskList;