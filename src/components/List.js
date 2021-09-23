import React, { useState } from 'react';
import Add from './Add';
import Form from './Form';

function List() {
    const [lists, setLists] = useState([]);
    
    const addLists = list => {
        if (!list.text || /^\s*$/.test(list.text)) {
            return;
        };
        const newList = [list, ...lists]
    
        setLists(newList);
    };

    const updateList = (listId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
    setLists (prev =>prev.map(item => (item.id === listId ? newValue : item)))
    };

    const removeList = id => {
        const removeArr = [...lists].filter(list => list.id !== id)

        setLists(removeArr);
    };

    const completeList = id => {
        let updatedLists = lists.map(list => {
            if (list.id === id) {
                list.isComplete = !list.isComplete
            }
            return list;
        });
        setLists(updatedLists);
    }

    return (
        <div>
            <h2>Add your custom tags here!</h2>
            <Form onSubmit={addLists} />
            <Add 
                lists={lists}
                completeList={completeList}
                removeList={removeList}
                updateList={updateList}
            />
        </div>
    )
}

export default List
