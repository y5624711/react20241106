import React, { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { index: true, element: <div>Home Page</div> },
      { path: "sub1", element: <div>SUB1 PAGE!</div> },
      { path: "sub2", element: <div>SUB2 PAGE!</div> },
    ],
  },
]);

function WholePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={() => navigate("/")}>HOME</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/sub1")}>SUB1</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/sub2")}>SUB2</Button>
          </Box>
          <Button onClick={() => setCount(count + 1)}>{count}</Button>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

function MyApp73(props) {
  return <RouterProvider router={router} />;
}

export default MyApp73;
