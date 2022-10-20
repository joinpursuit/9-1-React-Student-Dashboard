function Student({ photo, names }) {
  return (
    <div className="Student">
      <img src={photo} height="120px"></img>
      <p>
        {names.preferredName} {names.preferredName.charAt(0) + "."}{" "}
        {names.surname}
      </p>
    </div>
  );
}

export default Student;
