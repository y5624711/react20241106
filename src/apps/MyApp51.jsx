import React, { createContext, useContext, useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

const MessageContext = createContext("");
const UpdateMessageContext = createContext(null);

//context로 prop drilling 없이 데이터 전달
function MyApp51(props) {
  const [message, setMessage] = useState("");
  const updateMessage = (message) => {
    setMessage(message);
  };

  return (
    <div>
      <UpdateMessageContext.Provider value={updateMessage}>
        <MyForm1 />
      </UpdateMessageContext.Provider>
      <MessageContext.Provider value={message}>
        <MyBox1 />
      </MessageContext.Provider>
    </div>
  );
}

function MyForm1() {
  return <MyForm2 />;
}
function MyBox1() {
  return <MyBox2 />;
}

function MyForm2() {
  const updateMessage = useContext(UpdateMessageContext);
  return (
    <>
      <Field>
        <Input onChange={(e) => updateMessage(e.target.value)} />
      </Field>
    </>
  );
}

function MyBox2() {
  const message = useContext(MessageContext);
  return (
    <Box>
      <p>message : {message}</p>
    </Box>
  );
}

export default MyApp51;
