import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useImmer } from "use-immer";

function MyApp78(props) {
  //use : react hook
  const [text, setText] = useState();
  useEffect(() => {}, []);
  useNavigate();
  useParams();
  useSearchParams();
  const [count, updateCount] = useImmer();
  useLocation();

  //hook 사용시
  //정확히 같은 순서로 실행되어야함
  //조건문 반복문 내에서 사용하면 안된다.

  //함수 컴포넌트 코드 가장 상위에 작성하는것을 권장

  return <div></div>;
}

export default MyApp78;
