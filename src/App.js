import { FaSun, FaMoon } from "react-icons/fa";
import { Flex, Heading, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [darkMode, setDardMode] = useState(false);

  const handleClick = () => {
    setDardMode(!darkMode);
  };

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Hello
        </Heading>
      </Flex>
      <IconButton onClick={handleClick} isRound="true">
        {darkMode ? <FaSun /> : <FaMoon />}
      </IconButton>
    </VStack>
  );
}

export default App;
