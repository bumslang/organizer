import { nanoid } from 'nanoid';
import { cloneElement, useEffect, useState } from 'react';


function Addition({ notes, setEditNum, setNotes, setSearch, setValue, editNum, value, date, fullDate, }) {
    let data = [];

    for (let key in localStorage) {
        if (typeof JSON.parse(localStorage.getItem(key)) === 'object' && JSON.parse(localStorage.getItem(key)) != null) {
            data.push(JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.removeItem(key)
        }
    }


    useEffect(() => {
        setNotes(data);
    }, [])


    let result = data.map((note, index) => {
        if (note['date'] === fullDate && note['text'] !== '') {
            return <div className='edit__note' key={index}>
                <span>{note.note}</span>
                <div>
                    <svg onClick={() => remItem(index)} width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                    <svg onClick={() => setEditNum(index)} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                        <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                    </svg>
                </div>
            </div>
        }
    });


    function remItem(index) {
        localStorage.removeItem(localStorage.key(index))
        setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
        setSearch('');
    }

    function addItem(e) {
        if (fullDate) {
            localStorage.setItem(nanoid(), JSON.stringify(createNote()));
            setNotes([...notes, createNote()]);
            setValue('');
        }

    }

    function changeValue(event) {
        setValue(event.target.value);
    }

    function changeItem(event) {
        setNotes([...notes.slice(0, editNum), { id: notes[editNum]['id'], text: event.target.value, note: notes[editNum]['note'] }, ...notes.slice(editNum + 1)]);
    }

    function stopEdit() {
        setEditNum(null);
    }

    function createNote() {
        return {
            date: fullDate,
            id: nanoid(),
            text: value,
            note: `запись ${date.getHours()}${date.getMinutes()}${date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds()}`}`,
            found: false,
        }
    }
    
    let textarea;
    if (!editNum && editNum !== 0) {
        textarea = <div className='edit__addition'>
            <textarea cols={30} rows={3} placeholder='Добавить' value={value} onChange={changeValue} />
            <button className='edit__button' onClick={addItem}>Добавить</button>
        </div>
    } else {
        textarea = <div className='edit__addition'>
            <textarea cols={30} rows={3} value={notes[editNum].text} onChange={changeItem} />
            <button className='edit__button' onClick={stopEdit}>Изменить</button>
        </div>
    }
    
    return <div>
        {textarea}
        {result}
    </div>
}


export default Addition;
