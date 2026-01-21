import { useQuery } from "@tanstack/react-query";
import { fetchCollaborators } from "../api/collaborators";
import { useCollaboratorStore } from "../store/collaboratorStore";

export function Collaborators() {
  const collaborators = useCollaboratorStore((s) => s.collaborators);
  const setCollaborators = useCollaboratorStore(
    (s) => s.setCollaborators
  );

  const { isLoading } = useQuery({
    queryKey: ["collaborators"],
    queryFn: fetchCollaborators,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {collaborators.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
}
