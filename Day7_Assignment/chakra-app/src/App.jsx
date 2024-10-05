import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  Stack,
  Text,
} from '@chakra-ui/react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <Box maxW="md" mx="auto" p={5}>
      <Heading mb={6} textAlign="center">
        Todo List
      </Heading>

      <Stack spacing={4}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <Button colorScheme="teal" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Stack>

      <Box mt={8}>
        {todos.map((todo, index) => (
          <Card key={index} mb={4}>
            <CardBody>
              <Text>{todo}</Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default App;
