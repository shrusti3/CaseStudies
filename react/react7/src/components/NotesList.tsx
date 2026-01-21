import { useNoteStore } from "../store/noteStore";

export function NotesList() {
  const notes = useNoteStore((s) => s.notes);
  const addNote = useNoteStore((s) => s.addNote);
  const updateNote = useNoteStore((s) => s.updateNote);
  const deleteNote = useNoteStore((s) => s.deleteNote);

  return (
    <section>
      <h2>Notes</h2>

      <button
        onClick={() =>
          addNote({
            id: Date.now().toString(),
            text: "New note",
          })
        }
      >
        Add Note
      </button>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <input
              value={note.text}
              onChange={(e) =>
                updateNote(note.id, e.target.value)
              }
            />
            <button onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
