import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function MyApp37(props) {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
  }

  return (
    <div>
      <Button onClick={handleClick}>값 증가</Button>
      <Button onClick={() => setNumber(number - 1)}>값 감소</Button>
      <Box>number : {number}</Box>
    </div>
  );
}

export default MyApp37;
