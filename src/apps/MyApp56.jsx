import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp56(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  function handleClickButton1() {
    setCount1(count1 + 1);
  }

  function handleClickButton2() {
    //언제가 실행하겠다는 약속 Promise
    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve(count2 + 1);
      }, 3000);
    });
    //Promise 안의 resolve가 실행되면 실행됨
    p.then((value) => setCount2(value));
  }

  function handleClickButton3() {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        const r = Math.random();
        if (r < 0.5) {
          resolve(count3 + 1);
        } else {
          reject();
        }
      }, 1000);
    });
    p.then((value) => setCount3(value)).catch(() => {
      console.log("프로미스에서 reject됨");
    });
  }

  function handleClickButton4() {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        const r = Math.random();
        if (r < 0.5) {
          resolve(count4 + 1);
        } else {
          reject();
        }
      }, 1000);
    });
    p.then((value) => value + 1)
      .then((value) => setCount4(value))
      .catch(() => {
        console.log("함수4 리젝");
      });
  }

  return (
    <div>
      <Button onClick={handleClickButton1}>버튼1 : {count1}</Button>
      <hr />
      <Button onClick={handleClickButton2}>버튼2 : {count2}</Button>
      <hr />
      <Button onClick={handleClickButton3}>버튼3 : {count3}</Button>
      <hr />
      <Button onClick={handleClickButton4}>버튼4 : {count4}</Button>
    </div>
  );
}

export default MyApp56;
