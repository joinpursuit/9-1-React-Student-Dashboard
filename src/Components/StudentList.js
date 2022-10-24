import Student from "./Student";

export default function StudentList({ data, selected }) {
  let cohortArr = data.filter((el) => {
    return el.cohort.cohortCode === selected.split(" ").join("");
  });
  //   console.log(cohortArr);

  return (
    <section className="student-list">
      <h2>{selected}</h2>
      <p>
        Total Students:{" "}
        {selected === "All Students" ? data.length : cohortArr.length}
      </p>
      <div>
        {selected === "All Students"
          ? data.map((person) => {
              let date = new Date(person.dob);

              return (
                <Student
                  key={person.id}
                  data={data}
                  person={person}
                  date={date}
                  selected={selected}
                />
              );
            })
          : cohortArr.map((person) => {
              let date = new Date(person.dob);

              return (
                <Student
                  key={person.id}
                  data={cohortArr}
                  person={person}
                  date={date}
                  selected={selected}
                />
              );
            })}
      </div>
    </section>
  );
}
