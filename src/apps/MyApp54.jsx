import React, { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyComp1({ text }) {
  const [count, setCount] = useState(0);

  //!!!어플리케이션 내부의 일은 쓸 이유가 없다!!!!

  // useEffect의 두번째 파라미터 (배열 [])은
  //  useEffect의 첫번째 파라미터 (함수)의 실행을 트리거하는 값들의 목록
  useEffect(() => {
    console.log("text나 count가 변경될 때 마다");
  }, [text, count]);

  useEffect(() => {
    console.log("text 변경됨");
  }, [text]);

  useEffect(() => {
    console.log("count 변경됨", count);

    //언마운트
    // 또는 이전 useEffect의 리턴된 함수가 현재 render의 useEffect 함수 실행 전에 실행됨
    return () => {
      //cleanUp 함수 - 이전 useEffect에 실행된 함수의 작업을 정리하는 목적
      //웹소켓(채팅) 에서 연결을 끊을때 주로 사용
      console.log("클린업(언마운트)@", count);
    };
  }, [count]);

  useEffect(() => {
    // mount(initial render)
    console.log("mount!");

    return () => {
      // unmount
      console.log("unmount@");
    };
  }, []);

  // mount, update
  console.log("render...");

  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>count : {count}</Button>
      <p>text : {text}</p>
    </Box>
  );
}
function MyApp54(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <Input onChange={(e) => setText(e.target.value)} value={text} />
      <MyComp1 text={text} />
    </div>
  );
}

export default MyApp54;
