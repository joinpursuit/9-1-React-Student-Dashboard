import React from 'react';
import { useState } from 'react';

function Notes({thisStudent}) {
    const notesObj = thisStudent[0].notes
    // Declare state for comments/ notes
    const [comment, setComment] = useState(notesObj)
    // Decalre state for new comment
    const [newComment, setNewComment] = useState(
        {
            commenter: "",
            comment: ""
        }
    )

    // function for handling user comments
    function handleUserComment(e) {
        setNewComment({...newComment, [e.target.name] : e.target.value})
    }

    // function for adding new Comment
    function addComment() {
        const lastestComment = {
            commenter: newComment.commenter,
            comment: newComment.comment
        }
        setComment([lastestComment, ...comment])
    }

    // function for form rest
    function resetForm() {
        setNewComment({
            commenter: "",
            comment: ""
        })
    }

    // function for submitHandle
    function handleSubmit(e) {
        e.preventDefault()
        addComment()
        resetForm()
    }
   
    return (
        <div className='Notes'>
            <h4>1-on-1 Notes</h4>
            <div className='form'>
                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <label htmlFor='commenter'>Commenter: </label>
                    <input 
                    type= "text"
                    id = "commenter"
                    value = {newComment.commenter}
                    name = "commenter"
                    onChange = {(event) => {handleUserComment(event)}}
                    />
                    <br></br>
                    
                    <label htmlFor='comment'>Comment: </label>
                    <input
                    type = "text"
                    id = "comment"
                    value = {newComment.comment}
                    name = "comment" 
                    onChange = {(event) => {handleUserComment(event)}}/>
                    <br></br>

                    <input 
                    type= "submit"
                    value = " Add Note"
                     />
                </form>

            </div>
            {
                comment.map(({comment, commenter}) => 
                    <li>{commenter} says, "{comment}"</li>
                )
            }
            
        </div>
    );
}

export default Notes;