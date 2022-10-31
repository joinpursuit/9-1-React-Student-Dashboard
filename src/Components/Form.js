import React, {useState} from 'react';

const Form = () => {
    const [formInfo, setFormInfo] = useState({
        commenterName: "",
        comment: ""
    })

    const handleChange = (e) => {
        setFormInfo({...formInfo, [e.target.id]: e.target.value})
      }

    function handleSubmit(e) {
        alert('Purchase was successful!')
      }

      
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='commenterName'>Commenter Name:
                    <input 
                        id="commenterName"
                        type="text"
                        name="commenterName"
                        value={formInfo.commenterName}
                        onChange = {handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor='comment'>Comment:
                    <input 
                        id="comment"
                        type="text"
                        name="comment"
                        value={formInfo.comment}
                        onChange = {handleChange}
                        />
                    </label>
                </div>
            </form>
        </>
    );
};

export default Form;