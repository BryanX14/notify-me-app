import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    const id = Date.now().toString();
    setNotes(prev => [...prev, { id, title: `Untitled ${prev.length + 1}` }]);
  }

  return (
    <div>
      <h1>Notify Me</h1>
      <button onClick={addNote}>New Note</button>
      <ul>{notes.map(n => <li key={n.id}>{n.title}</li>)}</ul>
    </div>
  );
}