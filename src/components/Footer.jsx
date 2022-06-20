import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const footerColor = useColorModeValue(
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 100%)",
    "linear-gradient(315deg, #485461 0%, #28313b 100%)"
  );

  return (
    <Flex
      w="100%"
      mt="3rem"
      py="3"
      px="5"
      bg={footerColor}
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
      justify="center"
      align="center"
    >
      <Text>© Shoaib Iqbal - 2022</Text>
    </Flex>
  );
};

export default Footer;
