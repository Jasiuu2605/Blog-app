import ReactDOM from 'react-dom';
import classes from './notification.module.css';

export type NotificationProps = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending'; // możesz dodać inne np. "info"
};

export default function Notification({
  title,
  message,
  status,
}: NotificationProps) {
  const statusClass: Record<NotificationProps['status'], string> = {
    success: classes.success ?? '',
    error: classes.error ?? '',
    pending: '',
  };

  const notificationsRoot = document.getElementById('notifications');
  if (!notificationsRoot) return null;

  const cssClasses = `${classes.notification ?? ''} ${statusClass[status]}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationsRoot
  );
}
