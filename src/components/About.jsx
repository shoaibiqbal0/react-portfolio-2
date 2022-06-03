import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <VStack>
      <Text fontSize="3xl" minW="400px" pt="5rem">
        Hi, I'm
      </Text>
      <Text
        fontSize="7xl"
        bgGradient="linear(to-r, blue.300, purple.300, pink.300)"
        bgClip="text"
        fontWeight="bold"
      >
        Shoaib Iqbal
      </Text>
    </VStack>
  );
};

export default About;
