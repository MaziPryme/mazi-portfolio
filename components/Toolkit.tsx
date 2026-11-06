"use client";

import { useState } from "react";
import { tools } from "../data/portfolio";
import ToolSymbol from "./ToolSymbol";

export default function Toolkit() {
  const [selectedTool, setSelectedTool] = useState(0);
  return (
    <section className="tools section wrap" id="tools">
      <div className="section-intro" data-reveal>
        <div>
          <span className="kicker">
            <span className="dot" /> THE TOOLKIT / 03
          </span>
          <h2>
            My everyday <em>toolkit.</em>
          </h2>
        </div>
        <p>
          The languages and tools I use to build interfaces, organize code and
          work with others.
        </p>
      </div>
      <div className="toolkit-shell" data-reveal>
        <div className="toolkit-heading">
          <div>
            <span>THE TOOLS BEHIND THE WORK</span>
            <strong>
              Built with purpose<span>.</span>
            </strong>
          </div>
          <p>Select a tool to see how I use it.</p>
        </div>
        <div className="toolkit-layout">
          <div className="tool-grid" role="group" aria-label="Explore my tools">
            {tools.map((tool, index) => (
              <button
                type="button"
                className={
                  "tool-card " + (selectedTool === index ? "selected" : "")
                }
                key={tool.name}
                aria-pressed={selectedTool === index}
                onClick={() => setSelectedTool(index)}
              >
                <span className="tool-card-top">
                  <span className="tool-glyph" aria-hidden="true">
                    <ToolSymbol name={tool.name} glyph={tool.glyph} />
                  </span>
                  <span className="tool-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="tool-card-name">{tool.name}</span>
                <span className="tool-card-category">{tool.category}</span>
              </button>
            ))}
          </div>
          <div className="tool-detail" aria-live="polite">
            <span className="tool-detail-label">
              <span className="dot" /> IN MY TOOLKIT
            </span>
            <div className="tool-detail-symbol" aria-hidden="true">
              <ToolSymbol
                name={tools[selectedTool].name}
                glyph={tools[selectedTool].glyph}
              />
            </div>
            <div>
              <span className="tool-detail-category">
                {tools[selectedTool].category}
              </span>
              <h3>
                {tools[selectedTool].name}
                <span>.</span>
              </h3>
              <p>{tools[selectedTool].detail}</p>
            </div>
            <span className="tool-detail-count">
              {String(selectedTool + 1).padStart(2, "0")} / 08
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
