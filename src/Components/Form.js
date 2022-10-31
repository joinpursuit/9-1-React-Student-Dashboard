import React, { useState } from 'react';

function Form({deets}) {
    const [commenterName, setCommenterName] = useState('');
    const [comment] = useState('');
    const [newComment, setNewComment] = useState(deets.notes)
    
    function handleSubmit(e) {
        e.preventDefault()
        const obj = { commenter: commenterName, comment: comment };
        setNewComment([...newComment, obj])
        setCommenterName('');
        setNewComment('');
      }
git 
      function addNote() {
        const newObj = { ...newComment, commenter: commenterName, comment: comment };
        newComment.push(newObj);}
    
    return (

        
        <div className='fullForm'>
      <h3>1-on-1 Notes</h3>
      <form onSubmit={handleSubmit} className="comment">
      <label>Commenter Name</label>
        <input
          onChange={(e) => setCommenterName(e.target.value)}
          type="text"
          name="commenter"
          id="commenter"
          value={commenterName}
        />
        <label>Comment</label>
        <input
          onChange={(element) => setNewComment(element.target.value)}
          type="text"
          name="comment"
          id="comment"
          value={comment}
        />
        <button onClick={handleSubmit} 
        className="add-note" 
        type="submit">Add Note </button>
      </form>
      <ul>  {newComment.map((notes) => {
          return (
             <li  >
              {notes.commenter} says, {notes.comment}
            </li> 
            
          );
        })}
        {addNote}</ul>
 
            
        </div>
    );
}

export default Form;