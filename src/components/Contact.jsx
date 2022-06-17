import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "../styles/styles.css";

const Contact = () => {
  return (
    <VStack h="100vh" w="100vw" justify="center" name="contact">
      <VStack minW={["300px", "500px"]} maxW={["300px", "500px"]}>
        <Text w="100%" fontWeight="bold" fontSize={["3xl", "5xl"]} pb="50">
          &#91; Contact &#93;
        </Text>
        <FormControl>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            variant="filled"
            isRequired
          />
          <FormLabel mt="5" htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            variant="filled"
            isRequired
          />
          <FormLabel mt="5" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            rows="10"
            id="message"
            name="message"
            type="text"
            variant="filled"
            isRequired
            resize="none"
          />
          <Button
            float="right"
            _focus={{ outline: "none" }}
            colorScheme="messenger"
            _focusVisible={{
              boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
            }}
            mt="5"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </VStack>
    </VStack>
  );
};

export default Contact;
