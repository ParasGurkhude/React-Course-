import React from 'react';
import { Box, Image, Heading, Text, VStack } from '@chakra-ui/react';

function CustomCard() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      p={5}
      _hover={{ boxShadow: '2xl' }} // Add hover effect for a 3D-like effect
      mx="auto" // Center the card horizontally
    >
      {/* Title at the top */}
      <Heading size="md" mb={4} textAlign="center">
        My Card Title
      </Heading>

      {/* Image/Icon in the center */}
      <Image
        src="https://via.placeholder.com/150"
        alt="Card Image"
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
        mx="auto" // Center the image horizontally
        mb={4}
      />

      {/* Description below the image */}
      <Text fontSize="lg" textAlign="center">
        This is a simple description for the card component. It can contain any relevant information.
      </Text>
    </Box>
  );
}

export default CustomCard;
