import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function MyApp36(props) {
  // 상태(state)가 변경되면 컴포넌트를 다시 화면에 그림(re render)

  //useState() : 초기 상태를 결정하고 상태를 저장한 변수와 상태를 변경하는 함수를 리턴한다.
  // const a = useState();
  // a[0]; //상태를 저장하는 변수
  // a[1]; // 상태를 변경하는 함수
  // const [n1, n2] = a;
  let [message, setMessage] = useState("처음 상태");

  let text = "hello";
  function fun1() {
    text = "안녕";
  }
  function fun2() {
    message = "두번째 상태"; //상태를 직접 변경하면 안됨
  }

  function fun3() {
    //set.. 메소드로 상태를 변경해야함
    setMessage("셋함수를 이용한 상태변경");
  }

  return (
    <div>
      <Button onClick={fun1}>클릭</Button>
      <Button onClick={fun2}>클릭2</Button>
      <Button onClick={fun3}>클릭3</Button>
      <Box w={20} h={20} bg={"blue"} color={"white"}>
        {text}
      </Box>
      <Box w={20} h={20} bg={"red"} color={"white"}>
        {/*초기상태*/}
        {message}
      </Box>
    </div>
  );
}

export default MyApp36;
