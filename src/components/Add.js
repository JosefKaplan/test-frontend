import React, { useState } from 'react';
import Form from './Form';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Add = ({lists, completeList, removeList, updateList})  => {
    const [edit, setEdit] = useState ({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateList(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    return lists.map((list, index) => (
        <div 
            className={list.isComplete ? 'list-row complete' : 'list-row'}
            key={index}
        >
        <div className="clickToComplete" key={list.id} onClick={() => completeList(list.id)}>
            <p className="text">
                {list.text}
                <p className="zmiz">
                    Click to complete!
                </p>
            </p>
        </div>
        <div className="icons">
            <RiCloseCircleLine 
                onClick={() => removeList(list.id)}
                className='delete-icon'
            />
            <TiEdit 
                onClick={() => setEdit({id: list.id, value: list.text})}
                className='edit-icon'
            />
        </div>
        </div>
    ));
}

export default Add
