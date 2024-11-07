import React from "react";
import {Box} from "@chakra-ui/react";

function MyApp30(props) {
  return (
    <div>
      <h5>컴포넌트 색</h5>
      <Box h={5} bg={}></Box>
      <Box h={5} bg={}></Box>
      <Box h={5} bg={}></Box>
      <Box h={5} bg={}></Box>
      <Box h={5} bg={}></Box>
      <Box h={5} bg={}></Box>
      <h5>컴포넌트 크기</h5>
      <Box bgColor={"green"} h={5} w={"1/3"}></Box>
      <Box bgColor={"orange"} h={5} w={"1/4"}></Box>
      <Box bgColor={"gray"} h={5} w={"1/5"}></Box>
      <Box bgColor={"purple"} h={5} w={"1/6"}></Box>
      <Box w={"200px"} h={"100px"} ml={5} pa={2.5} bg={"red"}>
        차크라UIBox3
      </Box>

      <Box w={"200px"} h={"100px"} ml={"20px"} pa={"10px"} bg={"blue"}>
        차크라UIBox2
      </Box>

      <Box
        width={"200px"}
        height={"100px"}
        marginLeft={"20px"}
        padding={"10px"}
        backgroundColor={"yellow"}
      >
        차크라UIBox1
      </Box>
      <div
        style={{
          width: "200px",
          height: "100px",
          marginLeft: "20px",
          padding: "10px",
          backgroundColor: "green",
        }}
      >
        컴포넌트
      </div>
    </div>
  );
}

export default MyApp30;
