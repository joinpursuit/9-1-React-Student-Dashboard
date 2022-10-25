import Cohort from "./Cohort";

export default function Header({
  Records,
  titleOption,
  totalOption,
  setTitleOption,
  setStudentListOption,
  setTotalOption,
}) {
  return (
    <div className="Header">
      <h1>Student Dashboard</h1>
      {/* <Cohort
        Records={Records}
        titleOption={titleOption}
        totalOption={totalOption}
        setTotalOption={setTotalOption}
        setTitleOption={setTitleOption}
        setStudentListOption={setStudentListOption} */}
      {/* /> */}
    </div>
  );
}
