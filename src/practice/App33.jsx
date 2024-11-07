import React from "react";
import { Button, Input, Textarea } from "@chakra-ui/react";

function App33(props) {
  function fun1() {
    console.log("이벤트 출력");
  }
  return (
    <div>
      {/*input에 keyup이벤트 발생시 로그 출력*/}
      <Input onKeyUp={fun1} />
      <hr />
      <Button onClick={fun1}>클릭</Button>
      <hr />
      <Textarea
        onMouseEnter={() => console.log("마우스들어옴")}
        onMouseLeave={() => console.log("마우스나감")}
      />
    </div>
  );
}

export default App33;
