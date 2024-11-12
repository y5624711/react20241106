import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub4", {
            id: 1,
            name: "iphone",
            available: true,
            shops: [],
            attribute: {},
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
