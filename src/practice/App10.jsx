import React from "react";

function App10(props) {
  const a = [
    { name: "son", age: 30 },
    { name: "rose", age: 10 },
    { name: "faker", age: 40 },
    { name: "hankang", age: 50 },
    { name: "lee", age: 20 },
    { name: "kim", age: 70 },
  ];

  return (
    <div>
      {a.map((item) => (
        <>{item.age >= 30 && <h1>{item.name}</h1>}</>
      ))}
      <hr />
      {a
        .filter((item) => item.age >= 30)
        .map((item) => (
          <h1>{item.name}</h1>
        ))}
    </div>
  );
}

export default App10;
