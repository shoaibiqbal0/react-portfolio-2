import {
  Center,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "../styles/styles.css";

const Contact = () => {
  const cardBackground = useColorModeValue(
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 100%);",
    "linear-gradient(315deg, #485461 0%, #28313b 100%);"
  );

  const projects = [
    {
      name: "React Todo List",
      githubLink: "",
      liveLink: "",
    },
    { name: "", githubLink: "", liveLink: "" },
    { name: "React Todo List", githubLink: "", liveLink: "" },
    { name: "React Todo List", githubLink: "", liveLink: "" },
    { name: "React Todo List", githubLink: "", liveLink: "" },
    { name: "React Todo List", githubLink: "", liveLink: "" },
  ];

  return (
    <VStack h="100vh" w="100vw" justify="center" name="contact">
      <VStack minW={["300px", "500px"]} maxW={["300px", "500px"]}>
        <Text w="100%" fontWeight="bold" fontSize={["3xl", "5xl"]} pb="50">
          &#91; Contact &#93;
        </Text>
        <SimpleGrid columns={[2, 3, 3]} spacing="5" w="100%">
          {projects.map((item, index) => {
            return (
              <VStack key={index}>
                <Center
                  boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
                  bgGradient={cardBackground}
                  p={["30", "10"]}
                  borderRadius="10"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform 0.5s",
                  }}
                >
                  <Image color="gray.500" w="60px" src={item.image} />
                </Center>
                <Text>{item.text}</Text>
              </VStack>
            );
          })}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Contact;
