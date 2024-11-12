import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function App62(props) {
  return (
    <div>
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
        btn
      </Button>
    </div>
  );
}

export default App62;
