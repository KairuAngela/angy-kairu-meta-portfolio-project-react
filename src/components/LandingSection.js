import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am AngyK :)";
const bio1 = "A full stack developer";
const bio2 = "Specialised in Web Development";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000000"
  >

<VStack spacing={4}>
      <Avatar
        size="3xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=10"
      />

      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>

      <Heading as="h2" size="md" color="white">
        {bio1}
      </Heading>

      <Heading as="h3" size="sm" color="white">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
