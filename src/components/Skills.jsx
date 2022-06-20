import {
  Center,
  Image,
  ScaleFade,
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
import "../styles/styles.css";

const skillImages = [
  {
    image: Css,
    text: "CSS",
  },
  {
    image: Javascript,
    text: "JavaScript",
  },
  { image: Mongo, text: "Mongo" },
  { image: Node, text: "Node" },
  { image: ReactImg, text: "React" },
  { image: Tailwind, text: "Tailwind" },
];

const Skills = () => {
  const cardBackground = useColorModeValue(
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 100%)",
    "linear-gradient(315deg, #485461 0%, #28313b 100%)"
  );

  return (
    <VStack minH="100vh" minW="100vw" justify="center" name="skills">
      <VStack
        minW={["300px", "500px", "800px"]}
        maxW={["300px", "500px", "800px"]}
      >
        <Text
          w="100%"
          fontWeight="bold"
          fontSize={["2xl", "3xl"]}
          pb="50"
          className="skills"
          color="rgb(71, 151, 225)"
        >
          Skills
        </Text>
        <SimpleGrid columns={[2, 3, 3]} spacing="5" w="100%">
          {skillImages.map((item, index) => {
            return (
              <VStack key={index}>
                <ScaleFade
                  initialScale={0.9}
                  in={true}
                  whileHover={{ scale: 1.05 }}
                >
                  <Center
                    boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
                    bgGradient={cardBackground}
                    p={["30", "10"]}
                    borderRadius="10"
                  >
                    <Image color="gray.500" w="60px" src={item.image} />
                  </Center>
                </ScaleFade>
                <Text>{item.text}</Text>
              </VStack>
            );
          })}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Skills;
