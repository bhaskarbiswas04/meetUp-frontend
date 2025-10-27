const EventCard = ({ event }) => {
  return (
    <div
      className="card shadow-sm rounded-3"
      style={{
        width: "20rem",
        height: "18rem",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Event Image */}
      <div className="position-relative" style={{ height: "180px" }}>
        <img
          src={event.eventImageUrl}
          className="card-img-top"
          alt={event.title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover", // keeps uniform image ratio
            borderTopLeftRadius: "0.75rem",
            borderTopRightRadius: "0.75rem",
          }}
        />
        <span
          className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-2 py-2"
          style={{
            fontSize: "1rem",
            fontWeight: "400",
            borderRadius: "8px",
          }}
        >
          {event.eventType} Event
        </span>
      </div>

      {/* Event Details */}
      <div className="card-body">
        <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
          {event.date} • {event.time} IST
        </p>
        <h5 className="card-title mb-2 fw-semibold">{event.title}</h5>
      </div>
    </div>
  );
};

export default EventCard;
