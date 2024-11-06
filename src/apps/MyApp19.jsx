import React from "react";

function MyApp19(props) {
  return (
    <div>
      <Comp address={"seoul"} city={"강남"}></Comp>
      <Comp address={"ny"}></Comp>
      <Comp city={"신촌"}></Comp>
      <Comp />
    </div>
  );
}

function Comp({ address = "서울역", city = "제주" }) {
  return (
    <div>
      <h3>comp</h3>
      <li>{address}</li>
      <li>{city}</li>
    </div>
  );
}

export default MyApp19;
