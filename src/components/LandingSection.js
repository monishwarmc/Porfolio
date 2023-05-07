import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Monishwar M C!";
const bio1 = "Student";
const bio2 = "SKCET";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack >
      <Avatar src="https://avatars.githubusercontent.com/u/113018871?v=4" size='3xl'></Avatar>
      <Heading as="h1" fontSize="6xl" fontWeight="bold" color="white">{greeting}</Heading>
      <Heading as="h2" fontSize="5xl" fontWeight="bold" color="white">{bio1}</Heading>
      <Heading as="h2" fontSize="3xl" fontWeight="bold" color="white">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
