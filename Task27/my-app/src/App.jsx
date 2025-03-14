import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./component/Theme.jsx";
import { Navigation } from "./component/Navigation.jsx";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return (
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  );
}

export default App;
