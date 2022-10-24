export default function Notes({notes}) {
    return(
        <li>{`${notes.commenter} says, '${notes.comment}'`}</li>
    )
}