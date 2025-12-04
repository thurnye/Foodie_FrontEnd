import { IUser } from '../../auth/types/auth.types';

// Re-export IUser for backwards compatibility with existing code
export type { IUser };

// ==================== TEAM TYPES ====================
export interface ITeam {
  _id: string;
  name: string;
  description?: string;
  avatar?: string;
  members: (string | IUser)[]; // User IDs or populated User objects
  channels: (string | IChannel)[]; // Channel IDs or populated Channel objects
  owner: string | IUser; // User ID or populated User object
  createdAt: Date | string;
  updatedAt: Date | string;
}

// ==================== CHANNEL TYPES ====================
export interface IChannel {
  _id: string;
  teamId: string;
  name: string;
  description?: string;
  type: 'text' | 'announcement';
  isPrivate: boolean;
  members: (string | IUser)[]; // User IDs or populated User objects
  unreadCount: number;
  lastMessage?: IMessage;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// ==================== MESSAGE TYPES ====================
export interface IMessage {
  _id: string;
  channelId?: string;
  conversationId?: string; // For DMs
  sender: IUser;
  content: string;
  type: 'text' | 'file' | 'image' | 'video' | 'system';
  attachments?: IAttachment[];
  mentions?: string[]; // User IDs
  reactions?: IReaction[];
  isEdited: boolean;
  isDeleted: boolean;
  replyTo?: string; // Message ID
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IAttachment {
  _id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'audio' | 'document' | 'other';
  size: number;
  mimeType: string;
  preview?: string; // For images
}

export interface IReaction {
  emoji: string;
  users: string[]; // User IDs
  count: number;
}

// ==================== CONVERSATION (DM) TYPES ====================
export interface IConversation {
  _id: string;
  participants: IUser[];
  lastMessage?: IMessage;
  unreadCount: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// ==================== NOTIFICATION TYPES ====================
export interface INotification {
  _id: string;
  userId: string;
  type: 'mention' | 'message' | 'meeting' | 'system';
  title: string;
  message: string;
  channelId?: string;
  conversationId?: string;
  meetingId?: string;
  isRead: boolean;
  createdAt: Date | string;
}

// ==================== MEETING TYPES ====================
export interface IMeeting {
  _id: string;
  title: string;
  description?: string;
  organizer: IUser;
  participants: IUser[];
  teamId?: string;
  channelId?: string;
  startTime: Date | string;
  endTime: Date | string;
  duration: number; // in minutes
  isRecurring: boolean;
  recurrencePattern?: 'daily' | 'weekly' | 'monthly';
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  link?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// ==================== CALL TYPES ====================
export interface ICall {
  _id: string;
  type: 'audio' | 'video';
  participants: ICallParticipant[];
  status: 'connecting' | 'active' | 'ended';
  startTime?: Date | string;
  endTime?: Date | string;
  meetingId?: string;
  channelId?: string;
  conversationId?: string;
}

export interface ICallParticipant {
  user: IUser;
  isMuted: boolean;
  isCameraOff: boolean;
  isScreenSharing: boolean;
  joinedAt: Date | string;
}

// ==================== SETTINGS TYPES ====================
export interface IUserSettings {
  theme: 'light' | 'dark';
  notifications: {
    mentions: boolean;
    directMessages: boolean;
    channelMessages: boolean;
    meetings: boolean;
    sound: boolean;
  };
  profile: {
    name: string;
    avatar?: string;
    status: 'online' | 'offline' | 'away' | 'busy';
  };
}

// ==================== CALENDAR TYPES ====================
export type CalendarView = 'month' | 'week' | 'day';

export interface ICalendarEvent {
  id: string;
  meeting: IMeeting;
  start: Date;
  end: Date;
}

// ==================== FORM TYPES ====================
export interface ICreateTeamData {
  name: string;
  description?: string;
  avatar?: string;
}

export interface ICreateChannelData {
  teamId: string;
  name: string;
  description?: string;
  type: 'text' | 'announcement';
  isPrivate: boolean;
}

export interface ICreateMeetingData {
  title: string;
  description?: string;
  participants: string[]; // User IDs
  teamId?: string;
  channelId?: string;
  startTime: Date | string;
  endTime: Date | string;
  isRecurring: boolean;
  recurrencePattern?: 'daily' | 'weekly' | 'monthly';
}

export interface ISendMessageData {
  channelId?: string;
  conversationId?: string;
  content: string;
  type: 'text' | 'file' | 'image' | 'video';
  attachments?: File[];
  mentions?: string[];
  replyTo?: string;
}
