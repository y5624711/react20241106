import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import { Switch } from "../components/ui/switch.jsx";

function MyComp1() {
  const [count, setCount] = useState(0);
  //mount 될때만 (initial render에 실행되는 함수
  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    //unmount
    return () => {
      console.log("unmount");
    };
  }, []);

  //mount, update
  console.log("render...");
  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>count : {count}</Button>
    </Box>
  );
}

function MyApp53(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Switch checked={show} onCheckedChange={(e) => setShow(e.checked)}>
        {show && <MyComp1 />}
      </Switch>
    </div>
  );
}

export default MyApp53;
