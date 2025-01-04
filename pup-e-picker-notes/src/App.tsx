import { useState, useEffect } from "react";
import "./App.css";
import { Note } from "./type";

const getAllNotes = async () => {
  try {
    const response = await fetch("http://localhost:3000/notes");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("response", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return [];
  }
};

function App() {
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getAllNotes().then(setNotes);
  }, []);

  return (
    <>
      <h1>Notes App</h1>
      <section className="notes-list">
        <h3>All Notes</h3>
        <ol>
          {notes.map((note) => (
            <li
              key={note.id}
              onClick={() => {
                setActiveNote(note);
              }}
            >
              {note.title}
            </li>
          ))}
        </ol>
      </section>
      <section className="my-note">
        <h3>My Note</h3>
        <div>
          <b>Title:</b> {activeNote?.title}
        </div>
        <div>
          <b>Content:</b> {activeNote?.content}
        </div>
      </section>
    </>
  );
}

export default App;
