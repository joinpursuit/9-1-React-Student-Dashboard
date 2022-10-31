import React from 'react';
import { useState } from 'react';
import { StudentInfo } from './StudentInfo';

function Notes(student) {

    const studentID = student.id
    const[commenter, setCommenter] = useState({
        id: {studentID},
        name: "",
        comment: "",
    })  

    function addComment(e){
     setCommenter({
        name: e.target.name,
        id: studentID,
        comment: e.target.value

     })
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment()
        resetForm()
    }

    function handleTextChange(e){
        let value = (e.target.value)
       }

    function resetForm(){
        setCommenter({
            id: student.id,
            name: "",
            comment: "",
        })
    }
    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Commenter Name:</label>
           <input 
                   type="text" 
                   id= {studentID}
                   onChange={handleTextChange} 
                   value= {commenter.name}
            />
                <label for="comment">Comment:</label>
                <input 
                type="text" 
                id= "comment"
                name="comment" value="commenter.comment"
                />
                <input type="submit" value="Add Note"/>   
            </form>
    );
}

export default Notes;


{/* <section>
<h4>1-on-1 Note</h4>
<form>
<label htmlFor="name">Commenter Name:</label><br>
  <input type="text" id="name" name="name" value=""><br>
  <label for="comment">Comment:</label><br>
  <input type="text" id="comment" name="comment" value=""><br><br>
  <input type="submit" value="Add Note">  
</form>
</section> */}
