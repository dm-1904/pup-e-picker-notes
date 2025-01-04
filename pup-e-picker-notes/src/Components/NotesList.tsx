import { Dispatch, SetStateAction } from "react";
import { Note } from "../type";

export const NotesList = ({
  allNotes,
  setActiveNote,
}: {
  allNotes: Note[];
  setActiveNote: Dispatch<SetStateAction<Note | null>>;
}) => {
  return (
    <section className="notes-list">
      <h3>All Notes</h3>
      <ol>
        {allNotes.map((note) => (
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
  );
};
