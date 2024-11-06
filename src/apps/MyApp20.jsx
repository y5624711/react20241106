import React from "react";

function MyApp20(props) {
  const obj = {
    title: "채식주의자",
    price: 50000,
  };
  return (
    <div>
      <Comp title={obj.title} price={obj.price} />
      <Comp {...obj} />
      <Comp {...obj} author={"한강"} />
    </div>
  );
}
//spread 연산자
// const a = { name: "son", age: 33 };
// const b = { ...a };

function Comp(props) {
  return (
    <div>
      <h3>comp</h3>
      <li>{props.title}</li>
      <li>{props.price}</li>
      <li>{props.author}</li>
    </div>
  );
}

export default MyApp20;
