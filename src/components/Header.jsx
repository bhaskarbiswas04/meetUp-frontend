import { useState } from "react";

const Header = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearchQuery(value); // Real-time search for events.
  };

  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeMauffdnVPSxC6GZASCE88K0rjGssXPhnw&s"
            alt="MeetUp Logo"
            className="img-fluid"
            style={{ height: "50px", width: "auto", objectFit: "contain" }}
          />
        </a>

        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="🔍︎ Search by title or type."
            value={input}
            onChange={handleChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
