import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import CustomCard from './components/CustomCard'; // Assuming it's in the same folder

function App() {
  return (
    <ChakraProvider>
      <Box p={8}>
        {/* Add the card component */}
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
