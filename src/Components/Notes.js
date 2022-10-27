import { useState } from "react"

export default function Notes ({ student, comments, handleSubmit }) {

    return (
        <div className='notes'>
            <form id={student.id} onSubmit={handleSubmit}>
                <fieldset>
                <legend>Instructor Notes</legend>
                <label htmlFor='name'>
                   Name 
                   <input type="text" name="name" id="commenter"></input>
                 </label>
                 <br/>
                 <label htmlFor='comment'>
                    Comment
                    <input type="textarea" name="comment" id="comment"></input>
                </label>
                <button type='submit' id="submit">Add Notes</button>
                </fieldset>
            </form>
            <ul>
                {
                    student.notes.map((note) => {
                        return (
                            <li><span>{note.commenter}</span> says "{note.comment}"</li>
                        )
                    })
                }
                {
                    comments.map((comment, i) => {
                        if (comment[student.id]){
                            return (
                                <li key={i}><span>{comment[student.id].name}</span> says "{comment[student.id].comment}"</li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}