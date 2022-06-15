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
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [display, setDisplay] = useState("none");

  const data = [
    { name: "About", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Contact", link: "#" },
  ];
  return (
    // Normal Navbar
    <Flex w="100%" p="5">
      <HStack display={isLargerThan600 ? null : "none"}>
        {data.map((item, index) => {
          return (
            <ButtonGroup key={index} variant="ghost" px="1">
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
          {data.map((item, index) => {
            return (
              <Flex key={index} mt="10%">
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
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        isRound="true"
      ></IconButton>
    </Flex>
  );
};

export default Navbar;
