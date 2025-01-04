import { Note } from "../type";

export const ActiveNote = ({ note }: { note: Note | null }) => {
  return (
    <section className="my-note">
      <h3>My Note</h3>
      <div>
        <b>Title:</b> {note?.title}
      </div>
      <div>
        <b>Content:</b> {note?.content}
      </div>
    </section>
  );
};
