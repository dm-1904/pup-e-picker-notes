import { useState } from "react";
import { Note } from "../type";

export const CreateNoteForm = ({
  createNote,
  isFetching,
}: {
  createNote: (note: Omit<Note, "id">) => void;
  isFetching: boolean;
}) => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createNote({
          title: titleInput,
          content: contentInput,
        });
        setTitleInput("");
        setContentInput("");
      }}
    >
      <h3>Create a new note</h3>
      <div>
        <label>
          Title:
          <input
            placeholder="Title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Content:
          <textarea
            placeholder="Content"
            style={{ minHeight: "100px" }}
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          disabled={isFetching}
        >
          Create Note
        </button>
      </div>
    </form>
  );
};
