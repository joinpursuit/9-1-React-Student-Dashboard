export default function CommentsForm(props) {
  return (
    <form className="form">
      <label htmlFor="commenterName">Commenter Name </label>
      <input id="commenterName" type="text" />
      <label htmlFor="inputComments">Comments </label>
      <input id="inputComments" type="text" />
      <button type="submit">Add Note</button>
    </form>
  );
}
