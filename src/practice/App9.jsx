import React from "react";

function App9(props) {
  const a = ["black", "pink", "faker", "hankang"];

  return (
    <div>
      {a.map((n) => (
        <li>{n}</li>
      ))}
    </div>
  );
}

export default App9;
