"use client";
import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";

const EventListing = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

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
    } catch (error) {
      setError("Error fetching events");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetching events when component loads
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="fw-bold">MeetUp Events</h1>

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
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

      <div className="container mt-5">
        {loading ? (
          <p>Loading events...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : events.length > 0 ? (
          <div className="row g-5">
            {events.map((event, index) => (
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
