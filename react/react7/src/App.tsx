import { NotesList } from "./components/NotesList";
import { Collaborators } from "./components/Collaborators";

function App() {
  return (
    <main>
      <h1>CollabNotes</h1>
      <Collaborators />
      <NotesList />
    </main>
  );
}

export default App;
