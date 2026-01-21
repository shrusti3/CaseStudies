import { useSessionStore } from "../store/sessionStore";

export function PreferencesPanel() {
  const role = useSessionStore((s) => s.role);
  const userId = useSessionStore((s) => s.userId);

  return (
    <section>
      <h2>Preferences</h2>

      <p>User ID: {userId ?? "Not logged in"}</p>
      <p>Role: {role}</p>

      <p>
        (Reload the page. This data stays. That’s persistence.)
      </p>
    </section>
  );
}
