import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <div>여기는 홈페이지</div> },
  {
    path: "/path1",
    element: (
      <div>
        여기는 1번경로 <hr />
        {/*자식 element 출력*/}
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>여기는 경로1의 홈페이지</div> },
      { path: "sub1", element: <div>여기는 1-1번경로</div> },
      { path: "sub2", element: <div>여기는 1-2번경로</div> },
    ],
  },
  { path: "/path2", element: <div>여기는 2번경로</div> },
  {
    path: "/path3",
    element: (
      <div>
        여기는 3번경로 <hr />
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>여기는 경로3의 홈페이지</div> },
      { path: "sub1", element: <div>여기는 3-1의 경로</div> },
      { path: "sub2", element: <div>여기는 3-2의 경로</div> },
    ],
  },
  { path: "/path4", element: <div>여기는 4번경로</div> },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
