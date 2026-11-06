"use client";

type HeaderProps = {
  menu: boolean;
  setMenu: (open: boolean) => void;
  showAllProjects: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export default function Header({
  menu,
  setMenu,
  showAllProjects,
  theme,
  toggleTheme,
}: HeaderProps) {
  return (
    <header className="header wrap">
      <a className="brand" href="#top" aria-label="Mazi Kelvin, back to top">
        <span className="brand-icon">
          <img src="/mazi-mk-logo.png" alt="" width="48" height="40" />
        </span>
        <span>Mazi Kelvin</span>
        <i />
      </a>
      <nav aria-label="Main navigation" className={menu ? "nav open" : "nav"}>
        <a
          href="#work"
          onClick={() => {
            setMenu(false);
            showAllProjects();
          }}
        >
          Work
        </a>
        <a href="#about" onClick={() => setMenu(false)}>
          About
        </a>
        <a href="#tools" onClick={() => setMenu(false)}>
          Tools
        </a>
      </nav>
      <div className="header-actions">
        <div className="theme-control">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            title={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
            <span className="theme-label">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
        <a className="header-cta" href="#contact">
          Get in touch <span>↗</span>
        </a>
      </div>
      <button
        className="menu"
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? "✕" : "☰"}
      </button>
    </header>
  );
}
