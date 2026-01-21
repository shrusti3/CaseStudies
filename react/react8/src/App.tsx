import { useCallback, useState } from "react";
import { TagList } from "./components/TagList";
import { TagInput } from "./components/TagInput";

function App() {
  const [tags, setTags] = useState<string[]>(["react", "memo", "hooks"]);
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0); // unrelated state

  const handleAddTag = useCallback((tag: string) => {
    setTags((prev) => [...prev, tag]);
  }, []);

  return (
    <main>
      <h1>StreamVision Memoization Demo</h1>

      <button onClick={() => setCounter((c) => c + 1)}>
        Increment Counter: {counter}
      </button>

      <br /><br />

      <input
        placeholder="Filter tags"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <TagInput onAddTag={handleAddTag} />
      <TagList tags={tags} filter={filter} />
    </main>
  );
}

export default App;
