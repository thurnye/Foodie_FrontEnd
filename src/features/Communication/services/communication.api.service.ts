import { apiClient } from '../../../shared/services/apiClient.service';
import {
  ITeam,
  IChannel,
  IMessage,
  IConversation,
  IMeeting,
  INotification,
} from '../types/communication.types';

const BASE_URL = '/communication';

/**
 * Team API Service
 */
export const TeamAPI = {
  // Get user's teams
  getUserTeams: async (): Promise<ITeam[]> => {
    return apiClient.get<ITeam[]>(`${BASE_URL}/teams`);
  },

  // Get team by ID
  getTeamById: async (teamId: string): Promise<ITeam> => {
    return apiClient.get<ITeam>(`${BASE_URL}/teams/${teamId}`);
  },

  // Create team
  createTeam: async (data: {
    name: string;
    description?: string;
    members?: string[];
  }): Promise<ITeam> => {
    return apiClient.post<ITeam>(`${BASE_URL}/teams`, data);
  },

  // Update team
  updateTeam: async (
    teamId: string,
    data: { name?: string; description?: string }
  ): Promise<ITeam> => {
    return apiClient.put<ITeam>(`${BASE_URL}/teams/${teamId}`, data);
  },

  // Delete team
  deleteTeam: async (teamId: string): Promise<void> => {
    return apiClient.delete<void>(`${BASE_URL}/teams/${teamId}`);
  },

  // Add members to team
  addMembers: async (teamId: string, userIds: string[]): Promise<ITeam> => {
    return apiClient.post<ITeam>(`${BASE_URL}/teams/${teamId}/members`, {
      userIds,
    });
  },

  // Remove member from team
  removeMember: async (teamId: string, userId: string): Promise<ITeam> => {
    return apiClient.delete<ITeam>(
      `${BASE_URL}/teams/${teamId}/members/${userId}`
    );
  },

  // Invite member by email
  inviteMemberByEmail: async (teamId: string, email: string): Promise<ITeam> => {
    return apiClient.post<ITeam>(`${BASE_URL}/teams/${teamId}/invite`, {
      email,
    });
  },
};

/**
 * Channel API Service
 */
export const ChannelAPI = {
  // Get team channels
  getTeamChannels: async (teamId: string): Promise<IChannel[]> => {
    return apiClient.get<IChannel[]>(`${BASE_URL}/channels/team/${teamId}`);
  },

  // Get channel by ID
  getChannelById: async (channelId: string): Promise<IChannel> => {
    return apiClient.get<IChannel>(`${BASE_URL}/channels/${channelId}`);
  },

  // Create channel
  createChannel: async (data: {
    teamId: string;
    name: string;
    description?: string;
    type?: 'text' | 'announcement';
    isPrivate?: boolean;
    members?: string[];
  }): Promise<IChannel> => {
    return apiClient.post<IChannel>(`${BASE_URL}/channels`, data);
  },

  // Update channel
  updateChannel: async (
    channelId: string,
    data: { name?: string; description?: string }
  ): Promise<IChannel> => {
    return apiClient.put<IChannel>(`${BASE_URL}/channels/${channelId}`, data);
  },

  // Delete channel
  deleteChannel: async (channelId: string): Promise<void> => {
    return apiClient.delete<void>(`${BASE_URL}/channels/${channelId}`);
  },

  // Add members to channel
  addMembers: async (channelId: string, userIds: string[]): Promise<IChannel> => {
    return apiClient.post<IChannel>(`${BASE_URL}/channels/${channelId}/members`, {
      userIds,
    });
  },

  // Remove member from channel
  removeMember: async (channelId: string, userId: string): Promise<IChannel> => {
    return apiClient.delete<IChannel>(
      `${BASE_URL}/channels/${channelId}/members/${userId}`
    );
  },
};

/**
 * Message API Service
 */
export const MessageAPI = {
  // Get channel messages
  getChannelMessages: async (channelId: string): Promise<IMessage[]> => {
    return apiClient.get<IMessage[]>(`${BASE_URL}/messages/channel/${channelId}`);
  },

  // Get conversation messages
  getConversationMessages: async (conversationId: string): Promise<IMessage[]> => {
    return apiClient.get<IMessage[]>(
      `${BASE_URL}/messages/conversation/${conversationId}`
    );
  },

  // Send message
  sendMessage: async (data: {
    channelId?: string;
    conversationId?: string;
    content: string;
    type?: 'text' | 'file' | 'image' | 'video';
    attachments?: any[];
    mentions?: string[];
    replyTo?: string;
  }): Promise<IMessage> => {
    return apiClient.post<IMessage>(`${BASE_URL}/messages`, data);
  },

  // Edit message
  editMessage: async (messageId: string, content: string): Promise<IMessage> => {
    return apiClient.put<IMessage>(`${BASE_URL}/messages/${messageId}`, {
      content,
    });
  },

  // Delete message
  deleteMessage: async (messageId: string): Promise<void> => {
    return apiClient.delete<void>(`${BASE_URL}/messages/${messageId}`);
  },

  // Add reaction
  addReaction: async (messageId: string, emoji: string): Promise<IMessage> => {
    return apiClient.post<IMessage>(`${BASE_URL}/messages/${messageId}/reactions`, {
      emoji,
    });
  },

  // Remove reaction
  removeReaction: async (messageId: string, emoji: string): Promise<IMessage> => {
    return apiClient.delete<IMessage>(
      `${BASE_URL}/messages/${messageId}/reactions/${emoji}`
    );
  },
};

/**
 * Conversation API Service
 */
export const ConversationAPI = {
  // Get user conversations
  getUserConversations: async (): Promise<IConversation[]> => {
    return apiClient.get<IConversation[]>(`${BASE_URL}/conversations`);
  },

  // Get conversation by ID
  getConversationById: async (conversationId: string): Promise<IConversation> => {
    return apiClient.get<IConversation>(
      `${BASE_URL}/conversations/${conversationId}`
    );
  },

  // Create or get conversation
  createOrGetConversation: async (participants: string[]): Promise<IConversation> => {
    return apiClient.post<IConversation>(`${BASE_URL}/conversations`, {
      participants,
    });
  },

  // Delete conversation
  deleteConversation: async (conversationId: string): Promise<void> => {
    return apiClient.delete<void>(`${BASE_URL}/conversations/${conversationId}`);
  },
};

/**
 * Meeting API Service
 */
export const MeetingAPI = {
  // Get user meetings
  getUserMeetings: async (): Promise<IMeeting[]> => {
    return apiClient.get<IMeeting[]>(`${BASE_URL}/meetings`);
  },

  // Get meeting by ID
  getMeetingById: async (meetingId: string): Promise<IMeeting> => {
    return apiClient.get<IMeeting>(`${BASE_URL}/meetings/${meetingId}`);
  },

  // Create meeting
  createMeeting: async (data: {
    title: string;
    description?: string;
    participants: string[];
    teamId?: string;
    channelId?: string;
    startTime: Date | string;
    endTime: Date | string;
    isRecurring?: boolean;
    recurrencePattern?: 'daily' | 'weekly' | 'monthly';
  }): Promise<IMeeting> => {
    return apiClient.post<IMeeting>(`${BASE_URL}/meetings`, data);
  },

  // Update meeting
  updateMeeting: async (
    meetingId: string,
    data: {
      title?: string;
      description?: string;
      participants?: string[];
      startTime?: Date | string;
      endTime?: Date | string;
    }
  ): Promise<IMeeting> => {
    return apiClient.put<IMeeting>(`${BASE_URL}/meetings/${meetingId}`, data);
  },

  // Cancel meeting
  cancelMeeting: async (meetingId: string): Promise<void> => {
    return apiClient.delete<void>(`${BASE_URL}/meetings/${meetingId}`);
  },
};

/**
 * Notification API Service
 */
export const NotificationAPI = {
  // Get user notifications
  getUserNotifications: async (): Promise<INotification[]> => {
    return apiClient.get<INotification[]>(`${BASE_URL}/notifications`);
  },

  // Mark notification as read
  markAsRead: async (notificationId: string): Promise<void> => {
    return apiClient.put<void>(
      `${BASE_URL}/notifications/${notificationId}/read`,
      {}
    );
  },

  // Mark all notifications as read
  markAllAsRead: async (): Promise<void> => {
    return apiClient.put<void>(`${BASE_URL}/notifications/read-all`, {});
  },

  // Delete notification
  deleteNotification: async (notificationId: string): Promise<void> => {
    return apiClient.delete<void>(`${BASE_URL}/notifications/${notificationId}`);
  },
};
