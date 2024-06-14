import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import Otp from "./components/Otp/Otp";
import Layout from "./components/Layout/Layout";
import Clients from "./components/Clients/Clients";
import Engineer from "./components/Engineer/Engineer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Stores from "./components/Stores/Stores";
import Engineerrequests from "./components/Engineerrequests/Engineerrequests";
import ErrorHandel from "./components/error/error";
import Requests from "./components/Requests/Requests";
import Theme from "./components/Theme/Theme";
import { useContext, useEffect } from "react";
import { UserContext } from "./components/context/userToken";
import EngineerProfile from "./components/EngineerProfile/EngineerProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "otp", element: <Otp /> },
      { path: "navbar", element: <Navbar /> , children: [
        { path: "requests", element: <Requests /> },
        { path: "stores", element: <Stores /> },
        { path: "navbar", element: <Clients /> },
        { path: "login", element: <Login /> },
        { path: "profile", element: <Profile /> },
        { path: "clients", element: <Clients /> },
        { path: "engineer", element: <Theme />,
        children: [
          { path: "", element: <Engineer />},
          { path: "engineerProfile/:id", element: <EngineerProfile /> }
        ] },
        { path: "engineerrequests", element: <Engineerrequests /> },
        { path: "*", element: <ErrorHandel /> },
      ] },
     
    ],
  },
]);

function App() {
  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  });
  return (
    <div >
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
