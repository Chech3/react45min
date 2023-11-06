import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import vehicles from "./data/vehicles.js";
import VehiclesView from "./views/VehiclesView.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

vehicles.forEach((vehicle) => {
  routes.push({
    path: vehicle.name,
    element: 
    <VehiclesView vehicle={vehicle} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
