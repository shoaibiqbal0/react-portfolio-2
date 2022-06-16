import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/about.css";

const name = "Shoaib Iqbal";

const About = () => {
  const [animatedName, setAnimatedName] = useState("");
  useEffect(() => {
    const fullName = name.slice(0, animatedName.length + 1);
    // If name is already typed out just return out of the function
    if (fullName === animatedName) return;
    // use setAnimatedName function every 150 milliseconds
    const timeout = setTimeout(() => {
      setAnimatedName(name.slice(0, animatedName.length + 1));
    }, 150);
    // Clear the timeout
    return () => clearTimeout(timeout);
  }, [animatedName]);

  return (
    <VStack h="90vh" w="100vw" justify="center" name="about">
      <VStack maxW={["300px", "500px"]}>
        <Text w="100%" fontSize={["1xl", "2xl"]}>
          Hi, I'm
        </Text>
        <HStack w="100%">
          <Text
            fontSize={["4xl", "7xl"]}
            bgGradient="linear(to-r, blue.400, purple.400, pink.400)"
            bgClip="text"
            fontWeight="bold"
          >
            {animatedName}
          </Text>
          <Text
            color="pink.400"
            fontSize={["4xl", "7xl"]}
            className="text-animate"
          />
        </HStack>
        <Text w="100%" fontSize="sm" color="gray.500">
          A fullstack developer who creates beautiful, responsive and scalable
          applications.
        </Text>
      </VStack>
    </VStack>
  );
};

export default About;
