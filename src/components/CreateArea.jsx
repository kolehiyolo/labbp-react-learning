import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props) {
  return (
    <Zoom in={true}>
      <input
        name="title"
        onChange={props.handleChange}
        value={props.note.title}
        placeholder="Title"
      />
    </Zoom>
  );
}

function AddButton(props) {
  return (
    <Zoom in={true}>
      <Fab 
        color="primary"
        aria-label="add"
        onClick={props.submitNote}
      >
        <AddIcon />
      </Fab>
    </Zoom>
  )
}

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [uiExpanded, setUiExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandTextArea() {
    setUiExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {
          uiExpanded && 
          <Input 
            handleChange={handleChange}
            note={note}
          />
        }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expandTextArea}
          value={note.content}
          placeholder="Take a note..."
          rows={uiExpanded ? 3 : 1}
        />
        {
          uiExpanded && 
          <AddButton 
            submitNote={submitNote}
          />
        }
      </form>
    </div>
  );
}

export default CreateArea;