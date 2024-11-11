import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp59(props) {
  return (
    <div>
      <Button
        onClick={() => {
          // JSON 형식 : 자바스크립트 객체 만드는 형식
          axios.post("/hi", { name: "손흥민", city: "서울" });
        }}
      >
        btn4
      </Button>

      <Button
        onClick={() => {
          const d = new FormData();
          d.append("name", "흥민");
          d.append("address", "서울");

          axios.post("/hi", d);
        }}
      >
        btn3
      </Button>

      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("name", "손");
          p.append("address", "런던");
          axios.post("/hi", p);
        }}
      >
        btn2
      </Button>

      <Button
        onClick={() => {
          axios.post("/hi", "somedata");
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp59;
