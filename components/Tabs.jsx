"use client";

import { useState, useRef, useEffect } from "react";

const tabs = ["Overview", "Projects", "Charts"];

export default function Tabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const underlineRef = useRef(null);

  useEffect(() => {
    const currentTab = tabsRef.current[active];
    if (currentTab && underlineRef.current) {
      underlineRef.current.style.width = `${currentTab.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${currentTab.offsetLeft}px)`;
    }
  }, [active]);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => (tabsRef.current[i] = el)}
            className={`tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div ref={underlineRef} className="tab-underline" />
    </div>
  );
}
