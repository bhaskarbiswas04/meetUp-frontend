import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";

const EventListing = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedType, setSelectedType] = useState("Both");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch events once
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://meet-up-backend-dusky.vercel.app/events"
      );

      if (!response.ok) {
        setError("Failed to fetch events");
        return;
      }

      const data = await response.json();
      setEvents(data);
      setFilteredEvents(data);
    } catch (error) {
      setError("Error fetching events");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✅ Filter by type (dropdown)
  const handleFilter = (type) => {
    setSelectedType(type);

    let filtered = [...events];
    if (type !== "Both") {
      filtered = filtered.filter((evt) => evt.eventType === type);
    }

    // Apply current search filter too
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.eventType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  };

  // ✅ Handle search (called whenever searchQuery changes)
  useEffect(() => {
    let filtered = [...events];

    // Apply event type filter
    if (selectedType !== "Both") {
      filtered = filtered.filter((evt) => evt.eventType === selectedType);
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.eventType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [searchQuery, events, selectedType]);

  return (
    <>
      {/* ✅ Pass search setter to Header */}
      <Header setSearchQuery={setSearchQuery} />

      <hr />

      <div className="container d-flex justify-content-between align-items-center mt-3">
        <h1 className="fw-bold">MeetUp Events</h1>

        {/* Filter Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedType === "Both"
              ? "Select Event Type"
              : `${selectedType} Events`}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilter("Online")}
              >
                Online
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilter("Offline")}
              >
                Offline
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilter("Both")}
              >
                Both
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ Events Listing */}
      <div className="container mt-5">
        {loading ? (
          <p>Loading events...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : filteredEvents.length > 0 ? (
          <div className="row g-5">
            {filteredEvents.map((event, index) => (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={index}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </>
  );
};

export default EventListing;
