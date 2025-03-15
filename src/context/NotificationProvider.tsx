import React, { useState, ReactNode } from "react";
import { NotificationContext, NotificationType } from "./NotificationContext";
import "../styles/Notification.css";

interface NotificationProviderProps {
  children: ReactNode;
}

interface NotificationState {
  message: string;
  type: NotificationType;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const showNotification = (message: string, type: NotificationType = "info", duration = 3000) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};