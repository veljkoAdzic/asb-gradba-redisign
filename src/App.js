import {StrictMode} from "react";
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/home/home";
import Error404Page from "./pages/404/404";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProject from "./pages/AddProject/AddProject";
const router = createBrowserRouter([
  {
    path: '/asb-gradba-redisign/',
    element: <Home />
  },
  {
    path: '/asb-gradba-redisign/dashboard',
    element: <Dashboard />
  },
  {
    path: "/asb-gradba-redisign/project/new",
    element: <AddProject />
  },
  {
    path: '*',
    element: 
    <Error404Page />
  }
])

export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  );
}


  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
