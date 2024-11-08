import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyApp40(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState(["latte", "americano", "mocha"]);
  const [items, setItems] = useState(["pizza", "돈까스", "우동"]);

  function handleKeyUp(e) {
    setText(e.target.value);
  }

  function handleBtnClick() {
    //state 가 객체일때
    // 새 객체(참조값)를 만들어서 상태를 변경해줘야한다.
    list.push("바닐라 라떼");
    console.log(list);
    setList(list);
  }
  function handleBtnClick2() {
    //state 가 객체면(object list)새 객체를 만들어서(복사) 상태를 변경해야함
    const nextItems = [...items, "라멘"];
    setItems(nextItems);
  }

  return (
    <div>
      <Button onClick={handleBtnClick2}>add</Button>
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <hr />
      <Button onClick={handleBtnClick}>add</Button>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
      <hr />
      <Input onKeyUp={() => handleKeyUp()} />
      <p>{text}</p>
    </div>
  );
}

export default MyApp40;
