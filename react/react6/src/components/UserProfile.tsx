import { useDesignHubStore } from "../store";

export function UserProfile() {
  const user = useDesignHubStore((s) => s.user);
  const setUser = useDesignHubStore((s) => s.setUser);
  const clearUser = useDesignHubStore((s) => s.clearUser);

  if (!user) {
    return (
      <button onClick={() => setUser({ id: "u1", name: "Alex" })}>
        Login
      </button>
    );
  }

  return (
    <div>
      Welcome, {user.name}
      <button onClick={clearUser}>Logout</button>
    </div>
  );
}
