import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      align="start"
      spacing={3}
      p={4}
      borderWidth="1px"
      borderRadius="2xl"
      borderColor="#323232"
      backgroundColor="#323232"
      maxW="400px"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />

      <Heading as="h3" size="md">
        {title}
      </Heading>

      <Text fontSize="sm" color="white">
        {description}
      </Text>

      <HStack spacing={2} color="white" cursor="pointer">
        <Text fontSize="sm">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>)
};

export default Card;
