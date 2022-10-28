import Student from "./Student";
import "./studentList.css";
export default function StudentList({
  totalOption,
  studentListOPtion,
  titleOption,
  setShowMore,
  showMore,
  index,
}) {
  return (
    <>
      <div className="Title">
        <h1>{titleOption}</h1>
        <p>
          Total Students: <span>{totalOption}</span>
        </p>
      </div>
      <div className="List" key={index}>
        {studentListOPtion.map((record, index) => {
          //! DOB Format
          const dateFormat = new Date(record.dob);
          //*
          return (
            <Student
              index={index}
              setShowMore={setShowMore}
              showMore={showMore}
              record={record}
              dateFormat={dateFormat}
            />
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
}
