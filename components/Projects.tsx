"use client";

import { filters, projects } from "../data/portfolio";

type ProjectsProps = {
  filter: string;
  changeFilter: (value: string) => void;
  filterLeaving: boolean;
};

export default function Projects({
  filter,
  changeFilter,
  filterLeaving,
}: ProjectsProps) {
  return (
    <section className="work section wrap" aria-label="Selected work">
      <div className="section-intro" data-reveal>
        <div>
          <span className="kicker">
            <span className="dot" /> SELECTED WORK / 01
          </span>
          <h2>
            Projects that
            <br />
            <em>taught me more.</em>
          </h2>
        </div>
        <p>
          Each project is a chance to solve a different problem. Here are three
          that show how I build, collaborate and keep improving.
        </p>
      </div>
      <div className="filterbar" id="work">
        <span>
          THE PROJECTS <sup>03</sup>
        </span>
        <div className="filters" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => changeFilter(f)}
              aria-pressed={filter === f}
              className={filter === f ? "active" : ""}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`project-list ${filterLeaving ? "filter-leaving" : ""}`}
        key={filter}
      >
        {projects
          .filter((p) => filter === "All work" || p.category === filter)
          .map((p) => (
            <article className="project" data-reveal key={p.name}>
              {p.art === "news" ? (
                <div className="project-art news-preview">
                  <div className="news-preview-main">
                    <img
                      src="/news-hub-home.png"
                      alt="News Hub homepage with its featured news story"
                      loading="lazy"
                    />
                  </div>
                  <div className="news-preview-secondary">
                    <img
                      src="/news-hub-sport.png"
                      alt="News Hub sports page with football stories"
                      loading="lazy"
                    />
                  </div>
                  <span className="news-preview-caption">
                    NEWS HUB / HOME &amp; SPORT
                  </span>
                </div>
              ) : (
                <div className={"project-art " + p.art} aria-hidden="true">
                  <div className="art-top">
                    <span>
                      {p.mark}
                      <b>.</b>
                    </span>
                    <span>● ● ●</span>
                  </div>
                  <div className="art-copy">
                    <span>PROJECT SPOTLIGHT</span>
                    <strong>
                      {p.label}
                      <span>.</span>
                    </strong>
                    <div className="art-pill">Explore the experience ↗</div>
                  </div>
                  <span className="art-index">{p.number} / 03</span>
                </div>
              )}
              <div className="project-info">
                <div className="project-meta">
                  <span>
                    {p.number} / {p.type}
                  </span>
                  <span>↗</span>
                </div>
                <h3>{p.name}</h3>
                <p className="summary">{p.summary}</p>
                <p className="description">{p.body}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <details className="case-study">
                  <summary>
                    Explore the project <span aria-hidden="true">+</span>
                  </summary>
                  <div className="case-study-content">
                    <div>
                      <h4>The project</h4>
                      <p>{p.details.context}</p>
                    </div>
                    <div>
                      <h4>My contribution</h4>
                      <p>{p.details.contribution}</p>
                    </div>
                    <div>
                      <h4>The challenge</h4>
                      <p>{p.details.challenge}</p>
                    </div>
                    <div>
                      <h4>What I learned</h4>
                      <p>{p.details.learning}</p>
                    </div>
                  </div>
                </details>
                {p.demo && (
                  <a
                    className="project-link"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <span>↗</span>
                  </a>
                )}{" "}
                {p.link && (
                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
