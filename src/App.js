import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/aboutus";
import Contact from "./components/contactus";
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./components/login";
import ProfileClass from "./components/ProfileClass";
import Profile from "./components/Profile";
import InstaMartShimmer from "./components/InstamartShimmerui";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

guardian = (props) => {
  if (localStorage.getItem("token")) {
    return <Outlet {...props} />;
  } else {
    return <Login />;
  }
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
        children: [
          {
            path: "profileclass",
            element: <ProfileClass />,
            errorElement: <Error />,
          },
          {
            path: "profile",
            element: <Profile />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<InstaMartShimmer/>}>
            <Instamart/>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
