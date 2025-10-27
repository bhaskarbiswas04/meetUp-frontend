const Header = ()=>{
    return (
      <nav class="navbar container">
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeMauffdnVPSxC6GZASCE88K0rjGssXPhnw&s"
              alt="MeetUp Logo"
              class="img-fluid"
              style={{ height: "50px", width: "auto", objectFit: "contain" }}
            />
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="🔍︎ Search by title or type."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
}

export default Header;