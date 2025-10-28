import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EventDetails = () => {
  const { title } = useParams(); // title from URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventByTitle = async () => {
      try {
        const res = await fetch(
          `https://meet-up-backend-dusky.vercel.app/events/title/${encodeURIComponent(
            title
          )}`
        );
        const data = await res.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventByTitle();
  }, [title]);

  if (!event) return <p>Loading event details...</p>;

  return (
    <>
      <div className="container mt-5 d-flex">
        <div style={{ flex: "1", maxWidth: "800px" }}>
          <h2 className="fw-bold mb-3">{event.title}</h2>
          <p>
            Hosted By: <strong>{event.hostedBy}</strong>
          </p>
          <img
            src={event.eventImageUrl}
            alt={event.title}
            style={{
              width: "80%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <p className="mt-3">
            <strong>Details: </strong>
          </p>
          <p className="text-muted"> {event.details}</p>
          <p>
            <strong>Additional Information:</strong>
          </p>
          <p>
            <strong>Dress Code:</strong> {event.dressCode}
          </p>
          <p>
            <strong>Age Restrictions:</strong> {event.ageRestrictions}
          </p>

          <p>
            <strong>Event Tags:</strong>
          </p>
          <div className="d-flex flex-wrap gap-2">
            {event.eventTags.split(",").map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded text-white fw-semibold"
                style={{
                  backgroundColor: "#ec413fff",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div class="card">
            <div class="card-body">
              <p>
                ⏱︎ {event.eventStartTime} to {event.eventEndTime}
              </p>
              <p>⚲ {event.location}</p>
              <p>₹ {event.price}</p>
            </div>
          </div>

          <h4 className="mt-4">Speakers: ({event.speakers.length})</h4>

          <div className="d-flex flex-wrap gap-3 mt-3">
            {event.speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="card text-center p-3"
                style={{
                  width: "180px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={speaker.profileImageUrl}
                  alt={speaker.name}
                  className="rounded-circle mx-auto"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body p-2">
                  <h6 className="fw-bold mb-0">{speaker.name}</h6>
                  <small className="text-muted">{speaker.designation}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
