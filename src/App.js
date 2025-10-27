import './App.css';
   import "bootstrap/dist/css/bootstrap.min.css";
   import "bootstrap/dist/js/bootstrap.bundle.min.js";

import EventListing from './pages/EventListing';

function App() {
  return (
    <main style={{ backgroundColor: "#f4f4f4ff" }}>
      <hr />
      <div className="container">
        <EventListing />
      </div>
    </main>
  );
}

export default App;
