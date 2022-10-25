import Article from "./Article";
import "./Main.css";

export default function Main({ Data }) {
  const studentInfo = Data.map((el) => {
    return <Article el={el} />;
  });
  return (
    <main>
      <section className="section">
        <h2>All Students</h2>
        <p>
          Total Students: <span>{Data.length}</span>
        </p>
        <div className="cards">{studentInfo}</div>
      </section>
    </main>
  );
}
