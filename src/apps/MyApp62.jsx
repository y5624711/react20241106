import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub7", [
            {
              title: "a",
              author: "작가1",
              content: "내용1",
              price: 1000,
              quantity: 10,
            },
            {
              title: "b",
              author: "작가2",
              content: "내용2",
              price: 2000,
              quantity: 20,
            },
            {
              title: "c",
              author: "작가3",
              content: "내용3",
              price: 3000,
              quantity: 30,
            },
          ]);
        }}
      >
        btn7
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "son", age: 11 },
            { name: "han", age: 22 },
            { name: "faker", age: 33 },
          ]);
        }}
      >
        btn6
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub5", ["coffee", "latte", "mocha"]);
        }}
      >
        btn5
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub4", {
            id: 1,
            name: "iphone",
            available: true,
            shops: ["코스트코", "월마트", "아마존"],
            attribute: { name: "제조회사", value: "엔비디아" },
          });
        }}
      >
        btn4
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub3", {
            name: "son",
            age: 99,
            married: true,
            items: ["coffee", "milk", "cola"],
            team: { name: "토트넘", location: "런던" },
          });
        }}
      >
        btn3
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub2", {
            title: "소년이온다",
            author: "한강",
            content: "내용",
            price: 10000,
            quantity: 10,
          });
        }}
      >
        btn2
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp62;
