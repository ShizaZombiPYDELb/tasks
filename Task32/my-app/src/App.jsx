import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Notfound from "./pages/subPage/Notfound.jsx";
import Todo from "./pages/subPage/TODO.jsx";
import Swapi from "./pages/subPage/Swapi.jsx";
import {Layout} from './component/Layout';
import Home from "./pages/mainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "todo", element: <Todo />},
      { path: "swapi", element: <Swapi /> },
      { path: "*", element: <Notfound /> }
    ]
  }
]);


function App() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default App;