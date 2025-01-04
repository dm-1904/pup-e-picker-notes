import { Note } from "./type";

const API_URL = "http://localhost:3000";

export const Request = {
  getAllNotes: (): Promise<Note[]> =>
    fetch(`${API_URL}/notes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Failed to fetch notes:", error);
        return [];
      }),
  createNote: (note: Omit<Note, "id">) => {
    return fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then((response) => response.json());
  },
};
