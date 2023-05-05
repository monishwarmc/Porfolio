import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={4} border="3px solid black" borderRadius="9px">
      <VStack spacing={4} padding="9px">
        <Image src={imageSrc}></Image>
        <Heading as="h2" color="blue">{title}</Heading>
        <Text>{description}</Text>
        <a href="#"><p>see more <FontAwesomeIcon icon={faArrowRight} /></p></a>
      </VStack>
    </HStack>
  );
};

export default Card;
