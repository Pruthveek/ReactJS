import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/aboutus";
import Contact from "./components/contactus";
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Login from "./components/login";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
