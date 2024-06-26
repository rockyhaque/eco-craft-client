import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import AllCraft from "./../pages/AllCraft/AllCraft";
import MyCraft from "./../pages/MyCraft/MyCraft";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AddCraft from "../pages/AddCraft/AddCraft";
import PrivateRoute from "./PrivateRoute";
import UpdateMyCraft from "../pages/UpdateMyCraft/UpdateMyCraft";
import Users from "../pages/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("http://localhost:5000/craft"),
      },
      {
        path: "/myCraft",
        element: (
          <PrivateRoute>
            <MyCraft></MyCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateMyCraft/:id",
        element: <PrivateRoute><UpdateMyCraft></UpdateMyCraft>,</PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/user"),
      },
    ],
  },
]);
