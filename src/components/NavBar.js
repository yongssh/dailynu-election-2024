
import React from "react";
import "../App.css";

const CATEGORIES = [
  { key: "federal", label: "Federal" },
  { key: "illinois", label: "Illinois" },
  { key: "cook-county", label: "Cook County" },
  { key: "referenda", label: "Referenda" },
];

export default function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerHeight =
      document.querySelector(".fixed-header")?.offsetHeight || 0;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav">
      <ul className="navList">
        {CATEGORIES.map((c) => (
          <li key={c.key} className="navItem">
            <button
              className="navButton"
              onClick={() => scrollToSection(c.key)} 
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
