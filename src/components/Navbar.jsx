import React, { useState } from "react";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import {
  Flex,
  IconButton,
  useColorMode,
  HStack,
  Button,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [display, setDisplay] = useState("none");
  const navbarColor = useColorModeValue("gray.200", "gray.700");

  const data = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  return (
    // Normal Navbar
    <Flex w="100%" p="5" position="fixed" bg={navbarColor}>
      <HStack display={isLargerThan600 ? null : "none"}>
        {data.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <Button variant="ghost">{item.name}</Button>
            </Link>
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
        bgColor={useColorModeValue("gray.500", "gray.800")}
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
                <Link to={item.link}>
                  <Button
                    onClick={() => setDisplay("none")}
                    variant="ghost"
                    p="10"
                    fontSize="x-large"
                  >
                    {item.name}
                  </Button>
                </Link>
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
