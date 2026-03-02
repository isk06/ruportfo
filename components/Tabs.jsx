"use client";

import { useState, useRef, useEffect } from "react";

const tabs = ["Overview", "Projects", "Charts"];
const hashMap = ["#overview", "#projects", "#charts"];

export default function Tabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const underlineRef = useRef(null);

  // ✅ Function to sync tab with URL hash
  const syncTabWithHash = () => {
    const hash = window.location.hash;

    const index = hashMap.indexOf(hash);
    if (index !== -1) {
      setActive(index);
    }
  };

  // ✅ Run on mount
  useEffect(() => {
    syncTabWithHash();

    // ✅ Listen to hash changes
    window.addEventListener("hashchange", syncTabWithHash);

    return () => {
      window.removeEventListener("hashchange", syncTabWithHash);
    };
  }, []);

  // ✅ Animate underline + update hash when tab changes
  useEffect(() => {
    const currentTab = tabsRef.current[active];

    if (currentTab && underlineRef.current) {
      underlineRef.current.style.width = `${currentTab.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${currentTab.offsetLeft}px)`;
    }

    // Update URL hash (without scrolling jump)
    window.history.replaceState(null, "", hashMap[active]);

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