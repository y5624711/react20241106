import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp45(props) {
  const [number, setNumber] = useState(0);
  console.log("컴포넌트 함수 호출됨");

  const handleClick = () => {
    // react 는 상태를 비교해서 적절한 순간에 re-render 한다.
    //아래의 경우는 전부다 실행되는게 아닌 마지막 +3 부분만 호출된다.
    setNumber(number + 1);
    setNumber(number + 2);
    setNumber(number + 3);
  };

  return (
    <div>
      <Button onClick={handleClick}>증가 {number}</Button>
    </div>
  );
}

export default MyApp45;
