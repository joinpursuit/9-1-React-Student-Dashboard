import React from 'react';

function StudentHiddenInfo({studentId, clicked, id, data}) {
    
    // map through urrent students/ filter and toggle class Name
        
    return (
        <div className ={`${id} ${clicked ? "" : "showMoreHidden"}`}>
            Hi
        </div>
    );
}

export default StudentHiddenInfo;

