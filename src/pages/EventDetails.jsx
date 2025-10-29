import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EventDetails = () => {
  const { title } = useParams();
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

  if (!event)
    return <p className="text-center mt-5">Loading event details...</p>;

  return (
    <>
      <div className="container my-5">
        <div className="row gy-4 align-items-start">
          {/* Left Column — Event Info */}
          <div className="col-12 col-lg-8">
            <h2 className="fw-bold mb-3 text-break">{event.title}</h2>
            <p>
              Hosted By: <strong>{event.hostedBy}</strong>
            </p>

            <div className="text-center mb-4">
              <img
                src={event.eventImageUrl}
                alt={event.title}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            <p className="mt-3">
              <strong>Details:</strong>
            </p>
            <p className="text-muted" style={{ lineHeight: "1.6" }}>
              {event.details}
            </p>

            <div className="mt-4">
              <p>
                <strong>Additional Information:</strong>
              </p>
              <p>
                <strong>Dress Code:</strong> {event.dressCode}
              </p>
              <p>
                <strong>Age Restrictions:</strong> {event.ageRestrictions}
              </p>
            </div>

            <p className="mt-4 mb-2 fw-semibold">Event Tags:</p>
            <div className="d-flex flex-wrap gap-2">
              {event.eventTags?.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-white fw-semibold"
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

          {/* Right Column — Details & Speakers */}
          <div className="col-12 col-lg-4">
            <div
              className="card border-0 shadow-sm mb-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <p className="mb-2">
                  ⏱︎ {event.eventStartTime} - {event.eventEndTime}
                </p>
                <p className="mb-2">⚲ {event.location}</p>
                <p className="mb-0 fw-bold text-success">₹ {event.price}</p>
              </div>
            </div>

            <h4 className="mt-4 mb-3">Speakers: ({event.speakers.length})</h4>

            <div className="d-flex flex-wrap justify-content-start gap-3">
              {event.speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="card text-center p-3 border-0 shadow-sm"
                  style={{
                    width: "160px",
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src={speaker.profileImageUrl}
                    alt={speaker.name}
                    className="rounded-circle mx-auto mb-2"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body p-2">
                    <h6 className="fw-bold mb-0 text-truncate">
                      {speaker.name}
                    </h6>
                    <small className="text-muted">{speaker.designation}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;

