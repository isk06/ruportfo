import { useState } from "react";

const tabs = ["Overview", "Projects", "Charts"];

export default function Tabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className="tab-underline"
        style={{ transform: `translateX(${active * 100}%)` }}
      />
    </div>
  );
}
