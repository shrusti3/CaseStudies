import { useDesignHubStore } from "../store";

export function FileList() {
  const files = useDesignHubStore((s) => s.files);
  const addFile = useDesignHubStore((s) => s.addFile);

  return (
    <div>
      <button
        onClick={() =>
          addFile({
            id: Date.now().toString(),
            name: "New File",
            content: "",
          })
        }
      >
        Add File
      </button>

      <ul>
        {files.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}
