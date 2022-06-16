import {
  Center,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  const cardBackground = useColorModeValue("gray.100", "gray.900");

  return (
    <VStack h="100vh" w="100vw" justify="center" name="skills">
      <VStack minW={["300px", "500px"]} maxW={["300px", "500px"]}>
        <Text
          w="100%"
          fontWeight="bold"
          fontSize={["4xl", "7xl"]}
          pb="50"
          bgGradient="linear(to-r, blue.400, purple.400, pink.400)"
          bgClip="text"
        >
          Skills
        </Text>
        <SimpleGrid columns={[2, 2, 3]} spacing="10" w="100%">
          <Center
            p="5"
            borderRadius="10"
            bg={cardBackground}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
          >
            <Image w="60px" src={Css} />
          </Center>
          <Center
            p="10"
            borderRadius="10"
            bg={cardBackground}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
          >
            <Image w="60px" src={Javascript} />
          </Center>
          <Center
            p="10"
            borderRadius="10"
            bg={cardBackground}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
          >
            <Image w="60px" src={ReactImg} />
          </Center>
          <Center
            p="10"
            borderRadius="10"
            bg={cardBackground}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
          >
            <Image w="60px" src={Node} />
          </Center>
          <Center
            p="10"
            borderRadius="10"
            bg={cardBackground}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
          >
            <Image w="60px" src={Mongo} />
          </Center>
          <Center
            p="10"
            borderRadius="10"
            bg={cardBackground}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
          >
            <Image w="60px" src={Tailwind} />
          </Center>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Skills;
