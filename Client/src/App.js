import { DefaultLayout } from "components/Layout";
import Register from "components/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
function App() {
  return (
    <>
      <DefaultLayout>
        <div className="App">
          <Register />
        </div>

        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
