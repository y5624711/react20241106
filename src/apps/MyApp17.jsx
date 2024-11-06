import React from "react";

function MyApp17(props) {
  return (
    <div>
      <Comp
        name="Hello"
        age={3.14}
        foods={["pizza", "burger"]}
        book={{ title: "소년이온다", author: "한강" }}
        info={function () {
          console.log("프랍으로 넘긴 함수");
        }}
        desc={() => {
          console.log("프람으로 넘긴 애로우 펑션");
        }}
        elem={<Comp2 />}
      ></Comp>
    </div>
  );
}

function Comp(props) {
  console.log(props.name);
  console.log(props.age);
  console.log(props.foods);
  console.log(props.book.title);
  console.log(props.book.author);
  props.info();
  props.desc();
  props.elem;

  return <div>컴프1</div>;
}

function Comp2() {
  return <h1>컴프2</h1>;
}

export default MyApp17;
