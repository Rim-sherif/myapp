import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./components/Layout/Login/Login";
import Otp from "./components/Layout/Otp/Otp";
import Layout from "./components/Layout/Layout";
import Clients from "./components/Layout/Navbar/Clients/Clients";
import Engineer from "./components/Layout/Navbar/Engineer/Engineer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Profile from "./components/Layout/Navbar/Profile/Profile";
import Stores from "./components/Layout/Navbar/Stores/Stores";
import Engineerrequests from "./components/Layout/Navbar/Engineerrequests/Engineerrequests";
import Storesrequests from "./components/Layout/Navbar/Storesrequests/Storesrequests";
import ErrorHandel from "./components/Layout/Navbar/error/error";
import Requests from "./components/Layout/Navbar/Requests/Requests";
import { useContext, useEffect } from "react";
import { UserContext } from "./components/context/userToken";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "otp", element: <Otp /> },
      {
        path: "navbar",
        element: <Navbar />,
        children: [
          { path: "", element: <Requests /> },
          { path: "Requests", element: <Requests /> },
          { path: "stores", element: <Stores /> },
          { path: "navbar", element: <Clients /> },
          { path: "navbar/login", element: <Login /> },
          { path: "profile", element: <Profile /> },
          { path: "clients", element: <Clients /> },
          { path: "engineer", element: <Engineer /> },
          { path: "engineerrequests", element: <Engineerrequests /> },
          { path: "storesrequests", element: <Storesrequests /> },
          { path: "*", element: <ErrorHandel /> },
        ],
      },
    ],
  },
]);

function App() {
  let {setUserToken} = useContext(UserContext)

  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null){
      setUserToken(localStorage.getItem('userToken'))
    }
  })
  return (
    <div className="root">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
