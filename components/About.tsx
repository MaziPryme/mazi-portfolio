export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="wrap about-grid" data-reveal>
        <div>
          <span className="kicker">
            <span className="dot" /> THE PERSON BEHIND THE CODE / 02
          </span>
          <h2>
            The developer
            <br />
            <em>behind the work.</em>
          </h2>
          <div className="monogram" aria-hidden="true">
            <span>M</span>
            <small>
              MAZI KELVIN
              <br />
              FRONTEND DEVELOPER
            </small>
            <b>✳</b>
          </div>
        </div>
        <div className="about-copy">
          <span className="about-small">
            HELLO, I’M MAZI <span>✳</span>
          </span>
          <h3>
            I enjoy the challenge of turning an idea into something{" "}
            <em>usable.</em>
          </h3>
          <p>
            I started learning frontend development in 2024, beginning with
            HTML, CSS and JavaScript. Since then, I’ve built with React and
            moved on to Next.js and TypeScript as I take on more complete
            applications.
          </p>
          <p>
            During my web development internship at Academy.listacc, I built
            websites, developed React applications and collaborated on group
            projects. I also enjoy debugging: understanding why something broke
            and working through a fix is part of the job I value.
          </p>
          <a
            href="https://github.com/MaziPryme"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Find me on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
