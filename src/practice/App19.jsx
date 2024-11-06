import React from "react";

function MyComp({ title = "무제", content = "공백", author = "무명" }) {
  return (
    <div>
      <h3>Comp</h3>
      <div>{title}</div>
      <div>{content}</div>
      <div>{author}</div>
    </div>
  );
}

function App19() {
  return (
    <div>
      <MyComp title={"채식주의자"} content={"비건"} author={"한강"} />
      <MyComp title={"채식주의자"} content={"비건"} />
      <MyComp title={"채식주의자"} author={"한강"} />
      <MyComp content={"비건"} author={"한강"} />
    </div>
  );
}

export default App19;
