import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import BgChanger from "./components/Projects/BgChanger.jsx";
import Clock from "./components/Projects/Clock.jsx";
import Counter from "./components/Projects/Counter.jsx";
import Map from "./components/Projects/Map.jsx";
import NestedLoop from "./components/Projects/NestedLoop.jsx";
import PasswordGenerator from "./components/Projects/PasswordGenerator.jsx";
import Toggle from "./components/Projects/Toggle.jsx";
import FormSubmitStatus from "./components/Projects/UseFormStatus.jsx";
import Github from "./components/Projects/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: "",
            element: <BgChanger />,
          },
          {
            path: "clock",
            element: <Clock />,
          },
          {
            path: "counter",
            element: <Counter />,
          },
          {
            path: "mapper",
            element: <Map />,
          },
          {
            path: "nested-loop",
            element: <NestedLoop />,
          },
          {
            path: "password-generator",
            element: <PasswordGenerator />,
          },
          {
            path: "toggle",
            element: <Toggle />,
          },
          {
            path: "form-submit",
            element: <FormSubmitStatus />,
          },
          {
            path: "*",
            element: <BgChanger />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <Github />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
