import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <Input onKeyUp={handleInput} />
      <p>{text}</p>
    </div>
  );
}

export default App37;
