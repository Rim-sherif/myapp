import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import Login from "./components/Layout/Login/Login";
import Otp from "./components/Layout/Otp/Otp";
import Layout from "./components/Layout/Layout";
import Clients from "./components/Layout/Navbar/Clients/Clients";
import Engineer from "./components/Layout/Navbar/Engineer/Engineer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Profile from "./components/Layout/Navbar/Profile/Profile";
import AddEngineer from "./components/Layout/Navbar/AddEngineer/AddEngineer";
import Stores from "./components/Layout/Navbar/Stores/Stores";
import AddStore from "./components/Layout/Navbar/AddStore/AddStore";
import EngineerRequestDesc from "./components/Layout/Navbar/Engineerrequests/EngineerRequestDesc/EngineerRequestDesc";
import Engineerrequests from "./components/Layout/Navbar/Engineerrequests/Engineerrequests";
import Storesrequests from "./components/Layout/Navbar/Storesrequests/Storesrequests";
import StoreRequestDesc from "./components/Layout/Navbar/Storesrequests/StoreRequestDesc/StoreRequestDesc";
import ErrorHandel from "./components/Layout/Navbar/error/error";
import Requests from "./components/Layout/Navbar/Requests/Requests";


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
          { path: "Requests/addstore", element: <AddStore /> },
          { path: "addstore", element: <AddStore /> },
          { path: "navbar", element: <Clients /> },
          { path: "navbar/login", element: <Login /> },
          { path: "profile", element: <Profile /> },
          { path: "clients", element: <Clients /> },
          { path: "engineer", element: <Engineer /> },
          { path: "addEngineer", element: <AddEngineer /> },
          { path: "Requests/addEngineer", element: <AddEngineer /> },
          {
            path: "engineerrequests/engineerRequestDesc",
            element: <EngineerRequestDesc />,
          },
          { path: "engineerrequests", element: <Engineerrequests /> },
          { path: "storesrequests", element: <Storesrequests /> },
          {
            path: "storesrequests/storeRequestDesc",
            element: <StoreRequestDesc />,
          },
          { path: "*", element: <ErrorHandel /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
    
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
