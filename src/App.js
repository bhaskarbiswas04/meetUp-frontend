import './App.css';
   import "bootstrap/dist/css/bootstrap.min.css";
   import "bootstrap/dist/js/bootstrap.bundle.min.js";

   import Header from './components/Header';
import EventListing from './pages/EventListing';

function App() {
  return (
    <main style={{ backgroundColor: "#f4f4f4ff" }}>
      <Header />
      <hr />
      <div className="container">
        <EventListing />
      </div>
    </main>
  );
}

export default App;
