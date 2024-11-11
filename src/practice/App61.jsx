import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function App61(props) {
  // [{product: {name: computer, price: 500}, company: samsung},
  // {product: {name: smart phone, price: 1000}, company: apple},
  // {product: {name: graphic card, price: 2000}, company: nvidia }]

  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main1/sub9", [
            { product: { name: "computer", price: 500 }, company: "samsung" },
            { product: { name: "smart phone", price: 1000 }, company: "apple" },
            {
              product: { name: "graphic card", price: 2000 },
              company: "nvidia",
            },
          ]);
        }}
      >
        but1
      </Button>
    </div>
  );
}

export default App61;
