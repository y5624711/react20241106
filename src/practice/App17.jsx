import React from "react";

function MyCom(props) {
  props.fun1();

  return (
    <div>
      <h3>주소:{props.address}</h3>
      <h3>주소:{props.age}</h3>
      <input type="text" readOnly={props.readonly} />
      <ul>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h3>상품명:{props.product.name}</h3>
      <h3>상품명:{props.product.price}원</h3>
    </div>
  );
}

function App17() {
  return (
    <div>
      <MyCom
        fun1={() => {
          console.log("fun1함수");
        }}
        address={"seoul"}
        age={33}
        readonly={true}
        list={["donald", "harris"]}
        product={{
          name: "컴퓨터",
          price: 300,
        }}
      ></MyCom>
    </div>
  );
}

export default App17;
