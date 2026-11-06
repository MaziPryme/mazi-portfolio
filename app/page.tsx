"use client";
import { useEffect, useRef, useState } from "react";
import InterfaceCarousel from "../components/InterfaceCarousel";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Toolkit from "../components/Toolkit";
import Contact from "../components/Contact";

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [word, setWord] = useState(0);
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [burst, setBurst] = useState(0);
  const [progress, setProgress] = useState(0);
  const [filterLeaving, setFilterLeaving] = useState(false);
  const filterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const changeFilter = (next: string) => {
    if (filterTimer.current) clearTimeout(filterTimer.current);
    if (next === filter) {
      setFilterLeaving(false);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFilter(next);
      setFilterLeaving(false);
      return;
    }
    setFilterLeaving(true);
    filterTimer.current = setTimeout(() => {
      setFilter(next);
      setFilterLeaving(false);
      filterTimer.current = null;
    }, 180);
  };
  useEffect(
    () => () => {
      if (filterTimer.current) clearTimeout(filterTimer.current);
    },
    [],
  );
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]:not(.is-visible)")
      .forEach((element) => {
        element.classList.add("reveal-ready");
        observer.observe(element);
      });
    return () => observer.disconnect();
  }, [filter]);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mazi-theme");
      const initial = saved === "dark" || saved === "light" ? saved : "light";
      setTheme(initial);
      document.documentElement.dataset.theme = initial;
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  }, []);
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("mazi-theme", next);
    } catch {}
    if (
      next === "dark" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setBurst((value) => value + 1);
    }
  };
  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % 3), 3500);
    return () => clearInterval(id);
  }, []);
  const words = [
    "solve real problems.",
    "work across screens.",
    "put people first.",
  ];
  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true">
        <div style={{ transform: `scaleX(${progress})` }} />
      </div>
      {burst > 0 && (
        <div
          key={burst}
          className="fireworks-screen"
          aria-hidden="true"
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) setBurst(0);
          }}
        >
          <div className="fireworks-welcome">
            <span>Welcome to my portfolio</span>
          </div>
          {[0, 1, 2, 3, 4].map((group) => (
            <span className={`screen-burst screen-burst-${group}`} key={group}>
              {Array.from({ length: 32 }, (_, i) => (
                <i
                  key={i}
                  style={{ "--ray": `${i * 11.25}deg` } as React.CSSProperties}
                />
              ))}
            </span>
          ))}
        </div>
      )}

      <Header
        menu={menu}
        setMenu={setMenu}
        showAllProjects={() => setFilter("All work")}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero
        word={word}
        words={words}
        showAllProjects={() => setFilter("All work")}
      />
      <Projects
        filter={filter}
        changeFilter={changeFilter}
        filterLeaving={filterLeaving}
      />
      <InterfaceCarousel />
      <Marquee />
      <About />
      <Toolkit />
      <Contact />
    </main>
  );
}
