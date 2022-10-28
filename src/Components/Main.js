import Article from "./Article";
import "./Main.css";

export default function Main({ Data, cohort }) {
  const studentInfo = Data.map((el) => {
    return <Article el={el} />;
  });
  const filteredCohorts = Data.filter(
    (student) => student.cohort.cohortCode === cohort
  );
  const cohortFilter = filteredCohorts.map((el) => {
    return <Article el={el} />;
  });
  let semester = cohort.replace(/[^a-zA-Z]+/g, "");

  return (
    <main>
      <section className="section">
        <h2>
          {cohort === "All Students"
            ? cohort
            : semester + " " + cohort.slice(-4)}
        </h2>
        <p>
          Total Students:{" "}
          <span>
            {cohort === "All Students"
              ? studentInfo.length
              : cohortFilter.length}
          </span>
        </p>
        <div className="cards">
          {cohort === "All Students" ? studentInfo : cohortFilter}
        </div>
      </section>
    </main>
  );
}
