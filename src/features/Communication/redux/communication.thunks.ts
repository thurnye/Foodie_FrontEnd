import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  TeamAPI,
  ChannelAPI,
  MessageAPI,
  ConversationAPI,
  MeetingAPI,
  NotificationAPI,
} from '../services/communication.api.service';
import {
  ITeam,
  IChannel,
  IMessage,
  IConversation,
  IMeeting,
  INotification,
} from '../types/communication.types';

/**
 * Team Thunks
 */
export const fetchUserTeams = createAsyncThunk<ITeam[]>(
  'communication/fetchUserTeams',
  async () => {
    return await TeamAPI.getUserTeams();
  }
);

export const createTeam = createAsyncThunk<
  ITeam,
  { name: string; description?: string; members?: string[] }
>('communication/createTeam', async (data) => {
  return await TeamAPI.createTeam(data);
});

export const addTeamMembers = createAsyncThunk<
  ITeam,
  { teamId: string; userIds: string[] }
>('communication/addTeamMembers', async ({ teamId, userIds }) => {
  return await TeamAPI.addMembers(teamId, userIds);
});

/**
 * Channel Thunks
 */
export const fetchTeamChannels = createAsyncThunk<IChannel[], string>(
  'communication/fetchTeamChannels',
  async (teamId) => {
    return await ChannelAPI.getTeamChannels(teamId);
  }
);

export const createChannel = createAsyncThunk<
  IChannel,
  {
    teamId: string;
    name: string;
    description?: string;
    type?: 'text' | 'announcement';
    isPrivate?: boolean;
    members?: string[];
  }
>('communication/createChannel', async (data) => {
  return await ChannelAPI.createChannel(data);
});

/**
 * Message Thunks
 */
export const fetchChannelMessages = createAsyncThunk<IMessage[], string>(
  'communication/fetchChannelMessages',
  async (channelId) => {
    return await MessageAPI.getChannelMessages(channelId);
  }
);

export const fetchConversationMessages = createAsyncThunk<IMessage[], string>(
  'communication/fetchConversationMessages',
  async (conversationId) => {
    return await MessageAPI.getConversationMessages(conversationId);
  }
);

export const sendMessage = createAsyncThunk<
  IMessage,
  {
    channelId?: string;
    conversationId?: string;
    content: string;
    type?: 'text' | 'file' | 'image' | 'video';
    attachments?: any[];
    mentions?: string[];
    replyTo?: string;
  }
>('communication/sendMessage', async (data) => {
  return await MessageAPI.sendMessage(data);
});

export const editMessage = createAsyncThunk<
  IMessage,
  { messageId: string; content: string }
>('communication/editMessage', async ({ messageId, content }) => {
  return await MessageAPI.editMessage(messageId, content);
});

export const deleteMessage = createAsyncThunk<string, string>(
  'communication/deleteMessage',
  async (messageId) => {
    await MessageAPI.deleteMessage(messageId);
    return messageId;
  }
);

export const addReaction = createAsyncThunk<
  IMessage,
  { messageId: string; emoji: string }
>('communication/addReaction', async ({ messageId, emoji }) => {
  return await MessageAPI.addReaction(messageId, emoji);
});

export const removeReaction = createAsyncThunk<
  IMessage,
  { messageId: string; emoji: string }
>('communication/removeReaction', async ({ messageId, emoji }) => {
  return await MessageAPI.removeReaction(messageId, emoji);
});

/**
 * Conversation Thunks
 */
export const fetchUserConversations = createAsyncThunk<IConversation[]>(
  'communication/fetchUserConversations',
  async () => {
    return await ConversationAPI.getUserConversations();
  }
);

export const createOrGetConversation = createAsyncThunk<
  IConversation,
  string[]
>('communication/createOrGetConversation', async (participants) => {
  return await ConversationAPI.createOrGetConversation(participants);
});

/**
 * Meeting Thunks
 */
export const fetchUserMeetings = createAsyncThunk<IMeeting[]>(
  'communication/fetchUserMeetings',
  async () => {
    return await MeetingAPI.getUserMeetings();
  }
);

export const createMeeting = createAsyncThunk<
  IMeeting,
  {
    title: string;
    description?: string;
    participants: string[];
    teamId?: string;
    channelId?: string;
    startTime: Date | string;
    endTime: Date | string;
    isRecurring?: boolean;
    recurrencePattern?: 'daily' | 'weekly' | 'monthly';
  }
>('communication/createMeeting', async (data) => {
  return await MeetingAPI.createMeeting(data);
});

export const updateMeeting = createAsyncThunk<
  IMeeting,
  {
    meetingId: string;
    data: {
      title?: string;
      description?: string;
      participants?: string[];
      startTime?: Date | string;
      endTime?: Date | string;
    };
  }
>('communication/updateMeeting', async ({ meetingId, data }) => {
  return await MeetingAPI.updateMeeting(meetingId, data);
});

export const cancelMeeting = createAsyncThunk<string, string>(
  'communication/cancelMeeting',
  async (meetingId) => {
    await MeetingAPI.cancelMeeting(meetingId);
    return meetingId;
  }
);

/**
 * Notification Thunks
 */
export const fetchUserNotifications = createAsyncThunk<INotification[]>(
  'communication/fetchUserNotifications',
  async () => {
    return await NotificationAPI.getUserNotifications();
  }
);

export const markNotificationAsRead = createAsyncThunk<string, string>(
  'communication/markNotificationAsRead',
  async (notificationId) => {
    await NotificationAPI.markAsRead(notificationId);
    return notificationId;
  }
);

export const markAllNotificationsAsRead = createAsyncThunk(
  'communication/markAllNotificationsAsRead',
  async () => {
    await NotificationAPI.markAllAsRead();
  }
);

export const deleteNotification = createAsyncThunk<string, string>(
  'communication/deleteNotification',
  async (notificationId) => {
    await NotificationAPI.deleteNotification(notificationId);
    return notificationId;
  }
);
