import "./Form.css";
import Data from "./data/data.json";
function Form({ Data }) {
  return (
    <section className="form">
      <hr className="hrForm"></hr>
      <h4>1-on-1 Notes</h4>
      <form>
        <label id="commenter">Commenter Name: </label>
        <input type="text" id="commenter"></input>
        <br />
        <br />
        <label id="comment">Comment: </label>
        <input type="text" id="comment"></input>
        <br />
        <br />
        <button className="formButton">Add Note</button>
      </form>
    </section>
  );
}

export default Form;
