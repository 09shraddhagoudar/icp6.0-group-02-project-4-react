import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Services from './views/Services/Services';
import Signup from './views/signup/signup';
import Login from './views/Login/Login';
import BookTour from './views/BookTour/BookTour';
import HillForts from './views/HillForts/HillForts';
import HillFortsMore from './views/HillFortsMore/HillFortsMore';
import SeaForts from './views/SeaForts/SeaForts';
import ForestForts from './views/ForestForts/ForestForts';
import SeaFortsMore from './views/SeaFortsMore/SeaFortsMore';
import ForestFortsMore from './views/ForestFortsMore/ForestFortsMore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/hillforts",
    element: <HillForts/>
  },
  {
    path: "/hillfortsmore",
    element: <HillFortsMore/>
  },
  {
    path: "/seafortsmore",
    element: <SeaFortsMore/>
  },
  {
    path: "/seaforts",
    element: <SeaForts/>
  },
  {
    path: "/forestforts",
    element: <ForestForts/>
  },
  {
    path: "/forestfortsmore",
    element: <ForestFortsMore/>
  },
  {
    path: "/services",
    element: <Services/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/bookTour",
    element: <BookTour/>
  },
  {
    path: "*",
    element: <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router}/>);