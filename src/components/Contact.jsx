import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/styles.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const toast = useToast();
  const [buttonState, setButtonState] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setButtonState(true);
    emailjs
      .send(
        "service_3io629g",
        "template_t1akxk4",
        {
          name: formData.name,
          to_name: "Shoaib",
          from_name: formData.name,
          message: formData.message,
          email: formData.email,
          reply_to: formData.email,
        },
        "lUXiTwadbK614CjwY"
      )
      .then(
        (response) => {
          toast({
            title: "Message Sent.",
            description: "Your message was sent successfully.",
            status: "success",
            duration: 6000,
            isClosable: true,
          });
          setButtonState(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <VStack pt="10%" h="100vh" w="100vw" justify="center" name="contact">
      <VStack minW={["300px", "500px"]} maxW={["300px", "500px"]}>
        <Text
          w="100%"
          fontWeight="bold"
          fontSize={["3xl", "5xl"]}
          pb={["50", "5", "5"]}
        >
          &#91; Contact &#93;
        </Text>

        <FormControl>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <Input
            onChange={handleChange}
            value={formData.name}
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
            onChange={handleChange}
            value={formData.email}
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
            onChange={handleChange}
            value={formData.message}
            rows="10"
            id="message"
            name="message"
            type="text"
            variant="filled"
            isRequired
            resize="none"
          />
          <Button
            onClick={sendEmail}
            float="right"
            _focus={{ outline: "none" }}
            colorScheme="linkedin"
            _focusVisible={{
              boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
            }}
            mt="5"
            type="submit"
            isLoading={buttonState}
          >
            Submit
          </Button>
        </FormControl>
      </VStack>
    </VStack>
  );
};

export default Contact;
