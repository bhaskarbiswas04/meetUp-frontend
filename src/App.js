import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from './components/Header';
import Footer from "./components/Footer"
import EventListing from './pages/EventListing';
import EventDetails from './pages/EventDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <hr />
        <div className="container">
          <EventListing />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/events/:title",
    element: (
      <>
        <Header />
        <hr />
        <div className="container">
          <EventDetails />
        </div>
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <div style={{ backgroundColor: "#f5f3f3ff" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
