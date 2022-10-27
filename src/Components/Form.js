import { useState } from "react"
import Notes from "./Notes"

export default function Form (){

    const [noteState,setNoteState] = useState(true)

    const showNote = () =>{
        setNoteState(!noteState)
    }

   const allNotes = []

    const [note, setNote] = useState({
        commentName: "",
        comment: "",

      })
    
      function handleTextChange(event) {
        setNote({
          ...note,
          [event.target.id]: event.target.value,
          
        });
        
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        // console.log(note)
        allNotes.push(note)
      }
return (

<>
<h4>1-on-1  Notes</h4>
<form onSubmit={handleSubmit}>
<label htmlFor="commentName">Commentator Name:</label>
  <input
    type="text"
    value={note.commentName}
    onChange={handleTextChange}
    id="commentName"
  />
  <br></br>
  <label htmlFor="comment">Comment:</label>
  <input
    type="text"
    value={note.comment}
    onChange={handleTextChange}
    id="comment"
  />

  <input type="submit" value={"Comment"} />
<ul><Notes
allNotes={allNotes}
 />
 </ul>
{/* {noteState ? null: <><div>{allNotes}</div><div>{note.commentName  +" says " + note.comment}</div> </>}  */}
</form>
</>
)
}