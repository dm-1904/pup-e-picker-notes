import { useState, useEffect } from "react";
import "./App.css";
import { Note } from "./type";
import { NotesList } from "./Components/NotesList";
import { ActiveNote } from "./Components/ActiveNote";
import { CreateNoteForm } from "./Components/CreateNoteForm";
import { Request } from "./api";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchAndSetAllNotes = () => {
    setIsFetching(true);
    return Request.getAllNotes()
      .then(setAllNotes)
      .then(() => {
        toast.success("Notes created successfully 😃");
      })
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchAndSetAllNotes();
  }, []);

  const createNote = (note: Omit<Note, "id">) => {
    setIsFetching(true);
    Request.createNote(note)
      .then(fetchAndSetAllNotes)
      .finally(() => setIsFetching(false));
  };

  /* npm i react-hot-toast */

  return (
    <>
      <Toaster />
      <h1>Notes App</h1>
      <h1>{isFetching ? "Loading...." : ""}</h1>
      <NotesList
        setActiveNote={setActiveNote}
        allNotes={allNotes}
      />
      <ActiveNote note={activeNote} />
      <CreateNoteForm
        createNote={createNote}
        isFetching={isFetching}
      />
    </>
  );
}

export default App;
