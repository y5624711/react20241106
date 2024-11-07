import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  function fun1(event) {
    console.log(event.target.innerHTML);
  }

  return (
    <div>
      <HStack>
        <Box bg={"orange"} onClick={fun1}>
          Lorem ipsum dolor.
        </Box>
        <Box bg={"blue"} onClick={fun1}>
          Lorem ipsum dolor sit.
        </Box>
        <Box bg={"teal"} onClick={fun1}>
          Lorem ipsum dolor sit amet.
        </Box>
      </HStack>
    </div>
  );
}

export default App34;
