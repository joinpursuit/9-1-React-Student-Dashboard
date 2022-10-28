import {useState} from "react"

const Form = ({handleComment}) => {

const [newForm, setNewForm] = useState({
    commenter: "",
    comment: ""
})

 function addComment(){
     const createComment = {
     commenter: newForm.commenter,
     comment: newForm.comment
     } 
     handleComment(createComment)
 }

 function handleText(event){
     setNewForm({
         ...newForm, [event.target.id]: event.target.value
     })
 }

function reset(){
    setNewForm({
    commenter: "",
    comment: ""
    })
}

function handleSubmit(event){
     event.preventDefault()
     addComment()
     reset()
 }

 return (
    <form onSubmit={handleSubmit}>
        <input 
        id="commenter"
        value={newForm.commenter}
        onChange={handleText}
        type="text"
        placeholder="Name"
        className="name"
        ></input>
        <br></br>
        <input 
        id="comment"
        value={newForm.comment}
        onChange={handleText}
        type="text"
        placeholder="Comment"
        className="notes"
        ></input>
        <br></br>
        <button className="button">Submit</button>
    </form>
 )

}

export default Form