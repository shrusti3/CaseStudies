import { useState, Suspense } from "react";
import React from "react";

const ProfileSettings = React.lazy(
  () => import("./ProfileSettings")
);

export default function Home() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h2>EduStream Home</h2>

      <button onClick={() => setShowSettings(true)}>
        Open Settings
      </button>

      {showSettings && (
        <Suspense fallback={<div>Loading settings...</div>}>
          <ProfileSettings />
        </Suspense>
      )}
    </div>
  );
}
