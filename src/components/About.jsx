import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <VStack h="80vh" w="100vw" justify="center">
      <VStack maxW={["300px", "500px"]}>
        <Text w="100%" fontSize={["1xl", "2xl"]}>
          Hi, I'm
        </Text>
        <Text
          w="100%"
          fontSize={["5xl", "7xl"]}
          bgGradient="linear(to-r, blue.400, purple.400, pink.400)"
          bgClip="text"
          fontWeight="bold"
        >
          Shoaib Iqbal
        </Text>
        <Text w="100%" fontSize="sm" color="gray.500">
          A fullstack developer who creates beautiful and scalable applications.
        </Text>
      </VStack>
    </VStack>
  );
};

export default About;
