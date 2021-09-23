import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input
                            type="text"
                            placeholder="Edit tag"
                            value={input}
                            name="text"
                            className="tag-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="add-button edit">
                            Edit tag
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add tag"
                            value={input}
                            onChange={handleChange}
                            name="text"
                            className="tag-input"
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='add-button'>
                            Add tag
                        </button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Form
