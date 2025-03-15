import { createContext } from "react";

export type NotificationType = 'info' | 'success' | 'error';

export interface NotificationContextType {
  showNotification: (message: string, type?: NotificationType, duration?: number) => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {},
});