import {StrictMode} from "react";
import {createBrowserRouter, Link, RouterProvider} from "react-router";
import Home from "./pages/home";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: 
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">Go To Home</Link>
    </div>
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
