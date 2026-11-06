export default function Marquee() {
  return (
    <div
      className="marquee"
      role="img"
      aria-label="Web apps, mobile apps, websites, APIs"
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {Array.from({ length: 4 }, (_, repeat) =>
              ["WEB APPS", "MOBILE APPS", "WEBSITES", "APIS"].map((word) => (
                <span className="marquee-item" key={`${repeat}-${word}`}>
                  {word}
                  <span className="marquee-dot">•</span>
                </span>
              )),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
