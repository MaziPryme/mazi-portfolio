"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    eyebrow: "01 / PRODUCT EXPERIENCE",
    title: "Make the details count.",
    description:
      "An interface concept that puts the product first, with clear information and a considered layout.",
    tags: ["Product cards", "Responsive layout"],
    kind: "product",
  },
  {
    eyebrow: "02 / DASHBOARD EXPERIENCE",
    title: "Clarity at a glance.",
    description:
      "A dashboard concept that organizes information into an interface that is easy to scan.",
    tags: ["Dashboard UI", "Visual hierarchy"],
    kind: "dashboard",
  },
  {
    eyebrow: "03 / EDITORIAL EXPERIENCE",
    title: "Give every story room.",
    description:
      "A news layout concept that balances a featured story with a simple, readable content grid.",
    tags: ["Editorial layout", "Content design"],
    kind: "editorial",
  },
] as const;

function SlideVisual({ kind }: { kind: (typeof slides)[number]["kind"] }) {
  if (kind === "product")
    return (
      <div className="showcase-visual visual-product" aria-hidden="true">
        <div className="mock-window">
          <div className="mock-top">
            <span>FORM / OBJECTS</span>
            <span>COLLECTION 01 &nbsp; ↗</span>
          </div>
          <div className="mock-product">
            <div className="mock-object">
              <div className="object-orbit orbit-one" />
              <div className="object-orbit orbit-two" />
              <div className="object-core" />
            </div>
            <div className="mock-product-copy">
              <span>FORM / 01</span>
              <strong>
                Objects
                <br />
                with purpose<span>.</span>
              </strong>
              <p>Thoughtful design for everyday moments.</p>
              <div className="mock-pill">EXPLORE COLLECTION &nbsp; ↗</div>
            </div>
          </div>
        </div>
      </div>
    );
  if (kind === "dashboard")
    return (
      <div className="showcase-visual visual-dashboard" aria-hidden="true">
        <div className="mock-window dash-window">
          <div className="mock-top">
            <span>STUDIO / OVERVIEW</span>
            <span>● &nbsp; WORKSPACE</span>
          </div>
          <div className="dash-content">
            <div className="dash-heading">
              <span>WORKSPACE OVERVIEW</span>
              <strong>
                Good to see you<span>.</span>
              </strong>
              <p>A little clarity for the work ahead.</p>
            </div>
            <div className="dash-cards">
              <div>
                <small>YOUR WORK</small>
                <b>In focus</b>
                <span>Organized for today</span>
              </div>
              <div>
                <small>PROGRESS</small>
                <b>Moving forward</b>
                <span>One step at a time</span>
              </div>
            </div>
            <div className="dash-chart">
              <span>ACTIVITY OVERVIEW</span>
              <div className="chart-bars">
                {[35, 56, 43, 70, 50, 78, 65, 90, 73, 100, 81, 94].map(
                  (h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="showcase-visual visual-editorial" aria-hidden="true">
      <div className="mock-window editorial-window">
        <div className="mock-top">
          <span>THE DAILY / EDIT</span>
          <span>CULTURE &nbsp; DESIGN &nbsp; IDEAS</span>
        </div>
        <div className="editorial-content">
          <div className="editorial-photo">
            <span>THE FEATURE</span>
            <div className="sun-shape" />
            <div className="hill-shape" />
          </div>
          <div className="editorial-copy">
            <span>DESIGN &amp; CULTURE / 01</span>
            <strong>
              A fresh
              <br />
              point of view<span>.</span>
            </strong>
            <p>Stories, ideas and the details that shape our world.</p>
            <div className="editorial-lines">
              <i />
              <i />
              <i />
            </div>
            <small>READ THE STORY &nbsp; ↗</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InterfaceCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchStart = useRef<number | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      if (media.matches) setPlaying(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!playing || paused || reduced) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, [playing, paused, reduced]);
  const move = (direction: number) =>
    setActive((i) => (i + direction + slides.length) % slides.length);
  const slide = slides[active];
  return (
    <section
      className="showcase section wrap"
      aria-labelledby="showcase-heading"
    >
      <div className="showcase-intro">
        <div>
          <span className="kicker">
            <span className="dot" /> INTERFACE PLAYGROUND
          </span>
          <h2 id="showcase-heading">
            Ideas you can
            <br />
            <em>explore.</em>
          </h2>
        </div>
        <p>
          Beyond finished projects, I enjoy exploring how an interface looks,
          feels, and moves. Here are a few visual concepts.
        </p>
      </div>
      <div
        className="showcase-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Interface design concepts"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null))
            setPaused(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <div
          className="showcase-content"
          onTouchStart={(event) => {
            touchStart.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const end = event.changedTouches[0]?.clientX ?? touchStart.current;
            const delta = end - touchStart.current;
            if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <div
            className="showcase-text"
            aria-live={playing && !paused ? "off" : "polite"}
            aria-atomic="true"
          >
            <span className="showcase-label">{slide.eyebrow}</span>
            <div>
              <span className="showcase-spark">✳</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <div className="showcase-tags">
                {slide.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="showcase-concept">
              CONCEPT STUDY / NOT A LIVE PROJECT
            </span>
          </div>
          <div className="showcase-art" key={slide.kind}>
            <SlideVisual kind={slide.kind} />
          </div>
        </div>
        <div className="showcase-controls">
          <div className="showcase-count">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className="showcase-count-line" />
            <span>0{slides.length}</span>
          </div>
          <div
            className="showcase-dots"
            role="group"
            aria-label="Choose a concept"
          >
            {slides.map((item, index) => (
              <button
                key={item.kind}
                className={index === active ? "current" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show ${item.eyebrow.toLowerCase()}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
          <div className="showcase-buttons">
            {!reduced && (
              <button
                className="showcase-play"
                onClick={() => setPlaying((value) => !value)}
                aria-label={
                  playing
                    ? "Pause automatic slideshow"
                    : "Start automatic slideshow"
                }
              >
                {playing ? "Pause" : "Auto play"}{" "}
                <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
              </button>
            )}
            <button
              className="showcase-arrow"
              onClick={() => move(-1)}
              aria-label="Previous concept"
            >
              ←
            </button>
            <button
              className="showcase-arrow"
              onClick={() => move(1)}
              aria-label="Next concept"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <p className="showcase-hint">
        USE THE ARROWS OR SWIPE TO EXPLORE <span>↗</span>
      </p>
    </section>
  );
}
