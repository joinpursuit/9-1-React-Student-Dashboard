import "./Aside.css";

export default function Aside({ array, Data }) {
  console.log(Data);

  return (
    <aside className="select">
      <h2>Choose a Class by Start Date</h2>
      <hr></hr>
      <ul className="sideUl">
        <li>
          <button>All Students</button>
        </li>
        <li>
          <button>Winter 2026</button>
        </li>
        <li>
          <button>Fall 2026</button>
        </li>
        <li>
          <button>Summer 2026</button>
        </li>
        <li>
          <button>Spring 2026</button>
        </li>
        <li>
          <button>Winter 2025</button>
        </li>
        <li>
          <button>Fall 2025</button>
        </li>
        <li>
          <button>Summer 2025</button>
        </li>
        <li>
          <button>Spring 2025</button>
        </li>
      </ul>
    </aside>
  );
}
