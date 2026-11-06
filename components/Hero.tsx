"use client";

type HeroProps = { word: number; words: string[]; showAllProjects: () => void };

export default function Hero({ word, words, showAllProjects }: HeroProps) {
  return (
    <section className="hero wrap">
      <div className="hero-inner">
        <div className="eyebrow">
          <span className="dot" /> MAZI KELECHUKWU KELVIN{" "}
          <span className="slash">/</span> FRONTEND DEVELOPER
        </div>
        <h1>
          Turning ideas into
          <br />
          websites that{" "}
          <span className="rotating" key={word}>
            {words[word]}
          </span>
        </h1>
        <p>
          I’m Mazi Kelvin, a frontend developer from Nigeria. I build responsive
          web interfaces with React, Next.js and TypeScript, and I enjoy the
          work of making each screen clear and useful.
        </p>
        <div className="hero-actions">
          <a href="#work" className="button" onClick={() => showAllProjects()}>
            Explore my work <span>↘</span>
          </a>
          <a href="#about" className="text-link">
            A little about me <span>↗</span>
          </a>
        </div>
      </div>
      <div className="hero-bottom">
        <span>FRONTEND DEVELOPMENT · NIGERIA</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
