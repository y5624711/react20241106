import React from "react";
import { Button, Input } from "@chakra-ui/react";

function MyApp35(e) {
  function fun1() {
    console.log("버튼클릭");
    console.log(e.target);
  }
  function fun2(event) {
    console.log("키업이벤트");
    console.log(event.target.value);
  }

  return (
    <div>
      <Input onKeyUp={fun2}></Input>
      <Input onKeyUp={fun2}></Input>
      <Input onKeyUp={fun2}></Input>
      <hr />
      <Button onClick={fun1}>버튼1</Button>
      <Button onClick={fun1}>버튼2</Button>
      <Button onClick={fun1}>버튼3</Button>
    </div>
  );
}

export default MyApp35;
