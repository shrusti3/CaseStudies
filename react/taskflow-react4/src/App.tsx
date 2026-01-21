import { useTheme } from './context/ThemeContext';
import NotificationList from './components/NotificationList';
import useNotificationStore from './store/notificationStore';

function App() {
  const { theme, toggleTheme } = useTheme();
  const addNotification = useNotificationStore((s) => s.addNotification);

  return (
    <div>
      <h1>TaskFlow</h1>
      <p>Theme: {theme}</p>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <button
        onClick={() =>
          addNotification('New task assigned', 'info')
        }
      >
        Add Notification
      </button>

      <NotificationList />
    </div>
  );
}

export default App;
