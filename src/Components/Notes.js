import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';

function Notes({thisStudent}) {
   
    const notesArr = thisStudent[0].notes
    // Declare state for comments/ notes
    const [comment, setComment] = useState(notesArr)
    
    // Declare state for new comment
    const [newComment, setNewComment] = useState(
        {
            commenter: "",
            comment: ""
        }
    )
    
    // Declare state for mouse over button
    const [button, setButton] = useState(false)
    
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
        notesArr.push(lastestComment)
        // setComment([lastestComment, ...thisStudent[0].notes])
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
                    <label htmlFor='commenter'>Commenter Name: </label>
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
                    className = "submitButton"
                    type= "submit"
                    value = " Add Note"
                    style = {{
                        color: button ? "black" : "white", 
                        backgroundColor: button ? "white" : "rgb(61, 128, 61)",
                    }}
                    onMouseEnter = {() => {setButton(true)}}
                    onMouseLeave = {() => {setButton(false)}}
                     />
                </form>

            </div>
            <ul>
            {
                comment.map(({comment, commenter}) => 
                    <li key = {uuid()}>{commenter} says, "{comment}"</li>
                )
            }
            </ul>
        </div>
    );
}

export default Notes;