import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp57(props) {
  return (
    <div>
      {/*JAVA Script*/}
      <Button onClick={() => {}}>get 요청</Button>
      <Button onClick={() => {}}>post 요청</Button>

      <hr />
      {/*HTML (a, form)*/}
      {/*get*/}
      <a href="/hi">to hi</a>
      <hr />
      <form action="/hello" method="get">
        <button>전송</button>
      </form>
      <hr />
      {/*  post*/}
      <form action="/greeting" method="post">
        <button>전송</button>
      </form>
    </div>
  );
}

export default MyApp57;
