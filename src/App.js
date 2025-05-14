import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/aboutus";
import Contact from "./components/contactus";
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";
import Login from "./components/login";
import ProfileClass from "./components/ProfileClass";
import Profile from "./components/Profile";
import InstaMartShimmer from "./components/InstamartShimmerui";
import Cart from "./components/Cart";

import UserContext from "./utils/userContext";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart"));

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("token") ? children : <Login />;
};

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Pruthveek",
    email: "pruthveek@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [
          { path: "profileclass", element: <ProfileClass /> },
          { path: "profile", element: <Profile /> },
        ],
      },
      { path: "/contactus", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      { path: "/login", element: <Login /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<InstaMartShimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
            <Cart />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
