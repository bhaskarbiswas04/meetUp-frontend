// const EventCard = ({ event }) => {
//   return (
//     <div
//       className="card shadow-sm rounded-3"
//       style={{
//         width: "20rem",
//         height: "18rem",
//         cursor: "pointer",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* Event Image */}
//       <div className="position-relative" style={{ height: "180px" }}>
//         <img
//           src={event.eventImageUrl}
//           className="card-img-top"
//           alt={event.title}
//           style={{
//             height: "100%",
//             width: "100%",
//             objectFit: "cover", // keeps uniform image ratio
//             borderTopLeftRadius: "0.75rem",
//             borderTopRightRadius: "0.75rem",
//           }}
//         />
//         <span
//           className="badge bg-light text-dark position-absolute top-0 start-0 m-2 px-2 py-2"
//           style={{
//             fontSize: "1rem",
//             fontWeight: "400",
//             borderRadius: "8px",
//           }}
//         >
//           {event.eventType} Event
//         </span>
//       </div>

//       {/* Event Details */}
//       <div className="card-body">
//         <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
//           {event.date} • {event.eventStartTime} IST
//         </p>
//         <h5 className="card-title mb-2 fw-semibold">{event.title}</h5>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/events/${encodeURIComponent(event.title)}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="card shadow-sm rounded-3"
        style={{
          width: "20rem",
          height: "18rem",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
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
              objectFit: "cover",
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
            {event.date} • {event.eventStartTime} IST
          </p>
          <h5 className="card-title mb-2 fw-semibold">{event.title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
