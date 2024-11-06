import React from "react";

function App16(props) {
  return (
    <div>
      <Comp1 address={"ny"} city={"seoul"} score={9.88} />
      <Comp1 address={"tk"} city={"tokyo"} score={7.88} />
    </div>
  );
}

function Comp1(param) {
  return (
    <div>
      <h3>
        주소:{param.address}, 도시:{param.city}, 점수:{param.score}
      </h3>
    </div>
  );
}

export default App16;
