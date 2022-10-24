function ShowMore({ Data }) {
  const details = Data.map((el) => {
    return (
      <section className="individual-details">
        <article className="code-wars">
          <h3>Codewars:</h3>
          <p>
            <span>Current Total:</span>
            {el.codewars.current.total}
          </p>
          <p>
            <span>Last Week:</span>
          </p>
          <p>
            <span>Goal:</span>
          </p>
          <p>
            <span>Percent of Goal Achieved:</span>
          </p>
        </article>
        <article className="scores">
          <h3>Scores</h3>
          <p>
            <span>Assignments:</span>
          </p>
          <p>
            <span>Projects:</span>
          </p>
          <p>
            <span>Assessments:</span>
          </p>
        </article>
        <article>
          <h3>Certifications</h3>
          <p>
            <span>Resume</span>
          </p>
          <p>
            <span>LinkedIn</span>
          </p>
          <p>
            <span>Mock Interview</span>
          </p>
          <p>
            <span>GitHub:</span>
          </p>
        </article>
      </section>
    );
  });
}

export default ShowMore;
