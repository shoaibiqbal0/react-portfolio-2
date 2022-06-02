import React, { useState } from "react";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import {
  Flex,
  IconButton,
  useColorMode,
  HStack,
  Button,
  ButtonGroup,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [darkMode, setDardMode] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [display, setDisplay] = useState("none");

  const data = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const handleClick = () => {
    toggleColorMode();
    setDardMode(!darkMode);
  };
  return (
    // Normal Navbar
    <Flex w="100%" p="5">
      <HStack display={isLargerThan600 ? null : "none"}>
        {data.map((item) => {
          return (
            <ButtonGroup variant="ghost" px="1">
              <Button>{item.name}</Button>
            </ButtonGroup>
          );
        })}
      </HStack>
      {/* Show Hamburger icon if window is less than 600px */}
      <HStack>
        <IconButton
          icon={<GiHamburgerMenu />}
          display={isLargerThan600 ? "none" : null}
          onClick={() => setDisplay(null)}
        />
      </HStack>
      {/* Mobile menu */}
      <Flex
        w="100vw"
        h="100vh"
        bgColor={useColorModeValue("gray.50", "gray.800")}
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex p="5" justify="flex-start">
          {/* Close menu icon */}
          <IconButton
            icon={<FaTimes onClick={() => setDisplay("none")} />}
          ></IconButton>
        </Flex>
        {/* Mobile menu items */}
        <Flex direction="column" align="center">
          {data.map((item) => {
            return (
              <Flex mt="10%">
                <ButtonGroup variant="ghost" px="1">
                  <Button p="10" fontSize="x-large">
                    {item.name}
                  </Button>
                </ButtonGroup>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Spacer />
      {/* Color mode button icon */}
      <IconButton
        ml="5"
        onClick={handleClick}
        icon={darkMode ? <FaSun /> : <FaMoon />}
        isRound="true"
      ></IconButton>
    </Flex>
  );
};

export default Navbar;
