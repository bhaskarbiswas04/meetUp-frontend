const EventCard = () =>{
    return (
      <div className="card shadow-sm rounded-3 my-5" style={{ width: "18rem" }}>
        {/* Event Image */}
        <div className="position-relative">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
            className="card-img-top"
            alt="Tech Conference"
            style={{
              borderTopLeftRadius: "0.75rem",
              borderTopRightRadius: "0.75rem",
            }}
          />
          <span
            className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-2 py-1"
            style={{
              fontSize: "0.8rem",
              fontWeight: "500",
              borderRadius: "8px",
            }}
          >
            Offline Event
          </span>
        </div>

        {/* Event Details */}
        <div className="card-body">
          <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
            Thu Jul 13 2023 • 7:00:00 AM IST
          </p>
          <h5 className="card-title mb-0 fw-semibold">Tech Conference</h5>
        </div>
      </div>
    );
}

export default EventCard;


