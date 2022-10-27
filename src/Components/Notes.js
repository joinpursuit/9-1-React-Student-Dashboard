export default function Notes ({ student, comments, newComment, handleChange, handleSubmit }) {

    //React rendering of Instructor Notes form
    return (
        <div className='notes'>
            <form id={student.id} onSubmit={handleSubmit}>
                <fieldset>
                <legend>Instructor Notes</legend>
                <label htmlFor='name'>
                   Name 
                   <input type="text" name="name" id="commenter" onChange={handleChange} value={newComment.name}></input>
                 </label>
                 <br/>
                 <label htmlFor='comment'>
                    Comment
                    <input type="textarea" name="comment" id="comment" onChange={handleChange} value={newComment.comment}></input>
                </label>
                <button type='submit' id="submit">Add Notes</button>
                </fieldset>
            </form>
            {/* Unordered list that displays previous comments from students data and added comments from state*/}
            <ul>
                {
                    student.notes.map((note, i) => {
                        return (
                            <li key={i}><span>{note.commenter}</span> says "{note.comment}"</li>
                        )
                    })
                }
                {
                    comments.map((comment, i) => {
                        if (comment.id === student.id){
                            return (
                                <li key={i}><span>{comment.name}</span> says "{comment.comment}"</li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}