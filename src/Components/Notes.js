export default function Notes ({allNotes}){
console.log(allNotes)

return(
    allNotes.map((e)=>{
        return(
        <li key={0}>{e.commentName  +" says " + e.comment}</li>   )
    })
    )
    

}