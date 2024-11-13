import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyHome() {
  const [params, setParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  return (
    <Box>
      <Input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("keyword", keyword);
          setParams(p);
        }}
      >
        전송
      </Button>
      <hr />
      <Button
        onClick={() => {
          const nextParams = new URLSearchParams(params);
          nextParams.set("page", 1);
          setParams(nextParams);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          const nextParams = new URLSearchParams(params);
          nextParams.set("page", 2);
          setParams(nextParams);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          const nextParams = new URLSearchParams(params);
          nextParams.set("page", 3);
          setParams(nextParams);
        }}
      >
        3
      </Button>
    </Box>
  );
}

const router = createBrowserRouter([{ path: "/", element: <MyHome /> }]);

function App76(props) {
  return <RouterProvider router={router} />;
}

export default App76;
