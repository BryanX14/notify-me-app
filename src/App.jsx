import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    const id = Date.now().toString();
    setNotes(prev => [...prev, { id, title: `Untitled ${prev.length + 1}`, body: "Empty note.." }]);
  }

  return (
    <div>
      <h1>Notify Me</h1>
      <button onClick={addNote}>New Note</button>
      <ul>{notes.map(n => <li key={n.id}>
        <strong>{n.title}</strong>
        <p>{n.body}</p>
        <button onClick={() => setNotes(prev => prev.filter(note => note.id !== n.id))}>Delete</button>
        </li>)}</ul>
    </div>
  );
}