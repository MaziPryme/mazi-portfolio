export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap" data-reveal>
        <div className="contact-top">
          <span className="kicker">
            <span className="dot" /> LET’S CONNECT / 04
          </span>
          <span>LET’S MAKE SOMETHING USEFUL ✳</span>
        </div>
        <h2>
          Let’s connect
          <br />
          <em>and build.</em>
        </h2>
        <div className="contact-bottom">
          <p>
            Interested in my work or want to discuss a frontend opportunity?
            Send me an email—I’d love to hear from you.
          </p>
          <a className="contact-button" href="mailto:Maziwyte@gmail.com">
            Maziwyte@gmail.com <span>↗</span>
          </a>
        </div>
        <footer>
          <span>© {new Date().getFullYear()} MAZI KELECHUKWU KELVIN</span>
          <span>BUILT WITH CARE IN NIGERIA</span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  );
}
