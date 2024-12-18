import React, { useState } from 'react';

    function App() {
      const [notes, setNotes] = useState([]);
      const [noteText, setNoteText] = useState('');

      const addNote = () => {
        if (noteText.trim()) {
          setNotes([...notes, noteText]);
          setNoteText('');
        }
      };

      const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
      };

      return (
        <div>
          <h1>Note Taking App</h1>
          <input
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Enter your note here"
          />
          <button onClick={addNote}>Add Note</button>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>
                {note} <button onClick={() => deleteNote(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
