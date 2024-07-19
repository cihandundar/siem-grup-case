import { Navbar } from "./components";
import { SignIn, SignUp } from "./pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";
import { AddBook, Book, BookDetails, EditBook, Home } from "./pages";
function App() {
  const route = [
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/book",
      element: <Book />,
    },
    {
      element: <PrivateRoute />,
      routes: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/book/:id",
          element: <BookDetails />,
        },
        {
          path: "/editbook/:postId",
          element: <EditBook />,
        },
        {
          path: "/addbook",
          element: <AddBook />,
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      {/* <ToastContainer position="top-right" /> */}
      <Navbar />
      <Routes>
        {route.map((route, index) => {
          if (route.routes) {
            return (
              <Route element={route.element} key={index}>
                {route.routes.map((subRoute, subIndex) => (
                  <Route
                    element={subRoute.element}
                    path={subRoute.path}
                    key={subIndex}
                  />
                ))}
              </Route>
            );
          }
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
