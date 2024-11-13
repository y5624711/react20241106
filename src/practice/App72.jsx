import React, { useState } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { path: "/", element: "HOME PAGE" },
      { path: "sub1", element: "SUB1" },
      { path: "sub2", element: "SUB2" },
    ],
  },
]);

function WholePage() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Link to="/">HOME</Link>
          </Box>
          <Box>
            <Link to="/sub1">SUB1</Link>
          </Box>
          <Box>
            <Link to="/sub2">SUB2</Link>
          </Box>
          <Button onClick={() => setCount(count + 1)}>{count}</Button>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;
