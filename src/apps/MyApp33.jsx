import React from "react";
import { Button } from "@chakra-ui/react";

function MyApp33(props) {
  function fun1() {
    console.log("클릭");
  }
  const fun2 = function () {
    console.log("펀2함수");
  };
  const fun3 = () => {
    console.log("펀3함수");
  };

  return (
    <div>
      <Button onClick={fun3}>차크라ui버튼</Button>
      <button onClick={fun2}>다른버튼</button>
      <button onClick={fun3}>다른버튼2</button>
      <button onClick={fun1}>버튼1</button>
      <button
        onClick={function () {
          console.log("두번째 클릭");
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          console.log("세번째 클릭");
        }}
      >
        버튼3
      </button>
    </div>
  );
}

export default MyApp33;
