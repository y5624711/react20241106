import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyHome() {
  const [keyword, setKeyword] = useState("");
  // const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  console.log(params.toString());

  return (
    <Box>
      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("keyword", keyword);
          setParams(p);
        }}
      >
        검색
      </Button>
      <hr />
      <Button
        onClick={() => {
          // const p = new URLSearchParams();
          // p.append("page", 1);
          // params.append("page", 1);
          // setParams(params);
          const nextParams = new URLSearchParams(params);
          nextParams.set("page", 1);
          setParams(nextParams);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          // const p = new URLSearchParams();
          // p.append("page", 2);
          // setParams(p);
          const nextParams = new URLSearchParams(params);
          nextParams.set("page", 2);
          setParams(nextParams);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          // const p = new URLSearchParams();
          // p.append("page", 3);
          // setParams(p);
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);

function MyApp76(props) {
  return <RouterProvider router={router} />;
}

export default MyApp76;
