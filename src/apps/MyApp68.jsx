import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp68(props) {
  return (
    <div>
      {/*Informational responses (100 – 199)
      Successful responses (200 – 299)
      Redirection messages (300 – 399)
      Client error responses (400 – 499)
      Server error responses (500 – 599)*/}

      <Button
        onClick={() => {
          axios
            .get("/api/main7/sub12")
            .then((res) => res.data)
            .then((data) => console.log(data))
            //200번대가 아니면 catch 로 받을 수 있음
            .catch((error) => {
              console.log("200번대 아님");
              console.log(error);
              console.log(error.response.status); //상태코드
              console.log(error.response.data); //응답본문
              console.log(error.response.data.name); //응답본문 속성
              console.log(error.response.data.age); //응답본문 속성
            });
        }}
      >
        405 응답
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub11");
        }}
      >
        403
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub10");
        }}
      >
        202
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub9");
        }}
      >
        405
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main7/sub8");
        }}
      >
        no content
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub7");
        }}
      >
        not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub6");
        }}
      >
        ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub5");
        }}
      >
        500 server error
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub4");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub3");
        }}
      >
        200 ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub2");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub1");
        }}
      >
        200 ok
      </Button>
    </div>
  );
}

export default MyApp68;
