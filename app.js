import React, { Children, use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./src/components/UserContext";
import { Provider } from "react-redux";
import appStor from "./src/utlis/appStor";
import Cart from "./src/components/Cart";


const AppLayout = () => {
  const [userid, setuserid] = useState();

useEffect (() => {
  const data = {
    name: "React App",
  }
  setuserid(data.name);
}, [])

  return (
    <Provider store={appStor}>
    <UserContext.Provider value={{userName : userid, setuserid}}>
    <div className="app">
      <UserContext.Provider value={{userName: "CodeWithSohail"}}>
      <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

 const Grocery = lazy(() => import("./src/components/Grocery"));
 const About = lazy( () => import("./src/components/AboutUs"));
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading.....</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading.....</h1>}><About/></Suspense>,
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
        path: '/restaurant/:resid',
        element : <RestaurantMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
