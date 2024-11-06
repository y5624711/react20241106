import React from "react";

function App22(props) {
  return (
    <div>
      <Comp1>
        <h3>Lorem.</h3>
        <p>Lorem ipsum.</p>
      </Comp1>
      <hr />
      <Comp2>
        <li>첫번째</li>
        <li>두번째</li>
        <li>세번쨰</li>
      </Comp2>
    </div>
  );
}

function Comp1(props) {
  return (
    <div>
      <h1>comp1</h1>
      {props.children}
      {props.children}
    </div>
  );
}

function Comp2({ children }) {
  return (
    <div>
      <h1>com2</h1>
      {children}
    </div>
  );
}

export default App22;
