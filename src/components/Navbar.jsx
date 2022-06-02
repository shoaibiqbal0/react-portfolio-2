import React, { useState } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const [darkMode, setDardMode] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    toggleColorMode();
    setDardMode(!darkMode);
  };
  return (
    <VStack p="5">
      <Flex w="100%">
        <Spacer />
        <IconButton ml="3" icon={<FaGithub />} isRound="true" />
        <IconButton ml="3" icon={<FaLinkedin />} isRound="true" />
        <IconButton
          ml="5"
          onClick={handleClick}
          icon={darkMode ? <FaSun /> : <FaMoon />}
          isRound="true"
        ></IconButton>
      </Flex>
    </VStack>
  );
};

export default Navbar;
