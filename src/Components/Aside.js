import { useState } from "react";
import "./Aside.css";

export default function Aside({ updateCohort }) {
  return (
    <aside className="select">
      <h2>Choose a Class by Start Date</h2>
      <hr></hr>
      <ul className="sideUl">
        <li>
          <button id="All Students" onClick={updateCohort}>
            All Students
          </button>
        </li>
        <li>
          <button id="Winter2026" onClick={updateCohort}>
            Winter 2026
          </button>
        </li>
        <li>
          <button id="Fall2026" onClick={updateCohort}>
            Fall 2026
          </button>
        </li>
        <li>
          <button id="Summer2026" onClick={updateCohort}>
            Summer 2026
          </button>
        </li>
        <li>
          <button id="Spring2026" onClick={updateCohort}>
            Spring 2026
          </button>
        </li>
        <li>
          <button id="Winter2025" onClick={updateCohort}>
            Winter 2025
          </button>
        </li>
        <li>
          <button id="Fall2025" onClick={updateCohort}>
            Fall 2025
          </button>
        </li>
        <li>
          <button id="Summer2025" onClick={updateCohort}>
            Summer 2025
          </button>
        </li>
        <li>
          <button id="Spring2025" onClick={updateCohort}>
            Spring 2025
          </button>
        </li>
      </ul>
    </aside>
  );
}
