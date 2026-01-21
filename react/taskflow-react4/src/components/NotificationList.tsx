import useNotificationStore from '../store/notificationStore';

const NotificationList = () => {
  const notifications = useNotificationStore((s) => s.notifications);
  const markAsRead = useNotificationStore((s) => s.markAsRead);

  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <ul>
      {unreadNotifications.map((n) => (
        <li key={n.id}>
          [{n.type}] {n.message}
          <button onClick={() => markAsRead(n.id)}>Mark read</button>
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
