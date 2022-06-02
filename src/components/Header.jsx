import {
  useMediaQuery,
  Text,
  Stack,
  Circle,
  Flex,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Flex
        direction={isLargerThan600 ? "row" : "column"}
        spacing="200px"
        p={isLargerThan600 ? "32" : "0"}
        alignSelf="center"
      >
        <Box mt={isLargerThan600 ? "0" : "16"}>
          <Text fontSize="4xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontWeight="bold"
            fontSize="7xl"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Shoaib Iqbal
          </Text>
          <Button mt="8" colorScheme="blue">
            Download CV
          </Button>
        </Box>
        <Image src="/avatar.png" />
      </Flex>
    </Stack>
  );
};

export default Header;
