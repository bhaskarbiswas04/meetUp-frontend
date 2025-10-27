import EventCard from "../components/EventCard";

export default function EventListing () {
    return (
      <>
        <div className="d-flex justify-content-between">
          <h1>MeetUp Events.</h1>

          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle .text-body-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Event type:
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Online
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Offline
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Both
                </a>
              </li>
            </ul>
          </div>
        </div>

        <EventCard />
      </>
    );
}