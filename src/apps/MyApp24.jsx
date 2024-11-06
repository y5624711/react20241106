import React from "react";

function MyApp24(props) {
  return (
    <div>
      <Box color="yellow" bg="black" text="대통령은 누굴까?" />
      <hr />
      <Box color="red" bg="#eeee" text="해리스?트럼프?" />
    </div>
  );
}

function Box({ color, bg, text }) {
  return (
    <div
      style={{
        color: color,
        background: bg,
      }}
    >
      {text}
    </div>
  );
}

export default MyApp24;
