import {
  Button,
  Center,
  HStack,
  IconButton,
  Image,
  Link,
  ScaleFade,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "../styles/styles.css";
import { FaGithub } from "react-icons/fa";
import Movies from "../assets/movies.png";
import Weather from "../assets/weather.png";
import Portfolio from "../assets/portfolio.png";

const Projects = () => {
  const cardBackground = useColorModeValue(
    "linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 100%)",
    "linear-gradient(315deg, #485461 0%, #28313b 100%)"
  );

  const projects = [
    {
      name: "Weather App",
      description:
        "A weather app built with React using OpenWeather API. The background image changes based on the current weather of the city.",
      githubLink: "https://github.com/shoaibiqbal0/react-weather-app",
      liveLink: "https://shoaibiqbal0.github.io/react-weather-app/",
      img: Weather,
    },
    {
      name: "Movies Search App",
      description:
        "Responsive movies search app with dark mode built with React and OMDb API. Search a movie, click on the poster and go to it's IMDb.",
      githubLink: "https://github.com/shoaibiqbal0/react-movie-app",
      liveLink: "https://shoaibiqbal0.github.io/react-movie-app/",
      img: Movies,
    },
    {
      name: "Portfolio",
      description:
        "This portfolio was made with React using Chakra UI component library. It is fully responsive using a mix of Grid and Flexbox.",
      githubLink: "https://github.com/shoaibiqbal0/react-portfolio-2",
      liveLink: "https://shoaibiqbal0.github.io/react-portfolio-2",
      img: Portfolio,
    },
  ];

  return (
    <VStack
      minH="100vh"
      minW="100vw"
      justify="center"
      name="projects"
      pt="7rem"
    >
      <VStack
        minW={["300px", "500px", "800px"]}
        maxW={["300px", "500px", "800px"]}
      >
        <Text
          w="100%"
          fontWeight="bold"
          fontSize={["2xl", "3xl"]}
          pb="50"
          className="projects"
          color="rgb(144, 128, 233)"
        >
          Projects
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing="5" w="100%">
          {projects.map((item, index) => {
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
                    p={["7.5", "2.5"]}
                    borderRadius="10"
                  >
                    <VStack>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Image src={item.img} />
                      <Text p="2" fontSize="sm">
                        {item.description}
                      </Text>
                      <HStack>
                        <Link href={item.githubLink} isExternal>
                          <IconButton
                            _focus={{ outline: "none" }}
                            _focusVisible={{
                              boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
                            }}
                            icon={<FaGithub />}
                          />
                        </Link>
                        <Link
                          href={item.liveLink}
                          isExternal
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            _focus={{ outline: "none" }}
                            _focusVisible={{
                              boxShadow: "0 0 0 3px rgba(66, 153, 255, 0.6)",
                            }}
                            colorScheme="linkedin"
                            mx="2"
                          >
                            Live Demo
                          </Button>
                        </Link>
                      </HStack>
                    </VStack>
                  </Center>
                </ScaleFade>
              </VStack>
            );
          })}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Projects;
