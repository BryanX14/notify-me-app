import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    const id = Date.now().toString();
    setNotes(prev => [...prev, { id, title: `Untitled ${prev.length + 1}`, body: "" }]);
  }

  return (
    <div>
      <h1>Notify Me</h1>
      <button onClick={addNote}>New Note</button>
      <ul>{notes.map(n => <li key={n.id}>
          <input value={n.title} onChange={(e) => setNotes((prev) => prev.map((note) => note.id === n.id ? { ...note, title: e.target.value } : note))}>
          </input>
        <textarea
        value={n.body}
        onChange={(e) => setNotes((prev) =>
        prev.map((note) =>
        note.id === n.id ? { ...note, body: e.target.value} : note)
        )}></textarea>
        <button onClick={() => setNotes(prev => prev.filter(note => note.id !== n.id))}>Delete</button>
        </li>)}</ul>
    </div>
  );
}