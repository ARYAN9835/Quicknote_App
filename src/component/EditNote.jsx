import React,{useState} from "react";

function EditNote({id,title,content,onEdit}) {
    const [editedNote, setEditedNote] = useState({title, content});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEditedNote((prevNote) =>({
            ...prevNote,
            [name] : value,
        }));
    };

    const handleSave = () => {
        onEdit(id, editedNote);
    };

    return(
        <div className="note">
            <input
                name = "title"
                onChange={handleChange}
                value={editedNote.title}
                placeholder="Title"
            />
            <textarea
                name="content"
                onChange={handleChange}
                value={editedNote.content}
                placeholder="Take a Note..."
            />
            <button onClick={handleSave}>save</button>
        </div>
    );
}

export default EditNote;
