import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub8", {
            data: {
              id: 5,
              name: "kim",
            },
          });
        }}
      >
        delete3
      </Button>

      <Button
        onClick={() => {
          axios.put("/api/main3/sub7", { title: "제목", author: "한강" });
        }}
      >
        put7
      </Button>

      <Button
        onClick={() => {
          axios.delete("/api/main3/sub6", {
            data: {
              id: 5,
              name: "kim",
            },
          });
        }}
      >
        delete2
      </Button>

      <Button
        onClick={() => {
          axios.delete("/api/main3/sub5");
        }}
      >
        delete
      </Button>

      <Button
        onClick={() => {
          axios.put("/api/main3/sub4", { title: "제목", author: "한강" });
        }}
      >
        put2
      </Button>

      <Button
        onClick={() => {
          axios.put("/api/main3/sub3");
        }}
      >
        put
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main3/sub2", { name: "son", age: 99 });
        }}
      >
        post
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main3/sub1");
        }}
      >
        get
      </Button>
    </div>
  );
}

export default MyApp63;
