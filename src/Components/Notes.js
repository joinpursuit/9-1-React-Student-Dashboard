import React from 'react';
import { useState } from 'react';

function Notes({thisStudent}) {
    const notesObj = thisStudent[0].notes
    // Declare state for existing comments
    const [comment, setComment] = useState(notesObj)
   
    return (
        <div className='Notes'>
            <h4>1-on-1 Notes</h4>
            <div className='form'>
                <form>

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