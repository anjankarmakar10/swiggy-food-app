import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import RestautantMenu from "./pages/RestautantMenu";
import Auth, { Login, SingUp } from "./pages/Auth";
import { ShimmerMenu } from "./components/ShimmerUI";
import Instamart from "./pages/Instamart";
import { Provider } from "react-redux";
import store from "./toolkit/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Cart from "./pages/Cart";
import userData from "./data/userData";

// This will lazy load Instamart component
const About = lazy(() => import("./pages/About"));

const AppLayout = () => {
  const [user] = useState(userData);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user }}>
        <Header />
        {/*all the childreen go in to the  Outlet */}
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
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerMenu />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestautantMenu />,
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <SingUp />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
