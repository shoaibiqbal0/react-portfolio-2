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
import "../styles/styles.css";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [display, setDisplay] = useState("none");
  const navbarColor = useColorModeValue(
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 100%)",
    "linear-gradient(315deg, #485461 0%, #28313b 100%)"
  );

  const data = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  return (
    // Normal Navbar
    <Flex
      zIndex={10}
      w="100%"
      py="2"
      px="5"
      position="fixed"
      bg={navbarColor}
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      <HStack display={isLargerThan600 ? null : "none"}>
        {data.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <Button
                _focus={{ outline: "none" }}
                _focusVisible={{
                  boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
                }}
                variant="ghost"
              >
                {item.name}
              </Button>
            </Link>
          );
        })}
      </HStack>
      {/* Show Hamburger icon if window is less than 600px */}
      <HStack>
        <IconButton
          _focus={{ outline: "none" }}
          _focusVisible={{
            boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
          }}
          icon={<GiHamburgerMenu />}
          display={isLargerThan600 ? "none" : null}
          onClick={() => setDisplay(null)}
        />
      </HStack>
      {/* Mobile menu */}
      <Flex
        w="100vw"
        h="100vh"
        bg={navbarColor}
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex py="2" px="5" justify="flex-start">
          {/* Close menu icon */}
          <IconButton
            _focus={{ outline: "none" }}
            _focusVisible={{
              boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
            }}
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
                    _focus={{ outline: "none" }}
                    _focusVisible={{
                      boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
                    }}
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
        _focus={{ outline: "none" }}
        _focusVisible={{
          boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
        }}
        ml="5"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        isRound="true"
      ></IconButton>
    </Flex>
  );
};

export default Navbar;
