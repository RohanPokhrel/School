export interface User {
  id: string;
  email: string;
  name: string;
  symbolNumber?: string;
  profileUrl?: string;
  role: 'student' | 'teacher' | 'admin';
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface Complaint {
  id: string;
  userId: string;
  title: string;
  message: string;
  status: 'pending' | 'resolved';
  createdAt: Date;
}