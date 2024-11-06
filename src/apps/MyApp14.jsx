import React from "react";
// zx : c를 받아서 아무 이름으로나 바꿔서 사용 가능
import zx, { a, b, f as fa } from "./MyApp13.jsx";
import { d, e, f as fb } from "./MyApp15.jsx";

function MyApp14(props) {
  return (
    <div>
      <h1>MyApp14</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{zx}</h1>
      <h1>{d}</h1>
      <h1>{e}</h1>
      <h1>{fa}</h1>
      <h1>{fb}</h1>
    </div>
  );
}

export default MyApp14;
