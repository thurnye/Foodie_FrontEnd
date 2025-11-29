import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ITeam,
  IChannel,
  IMessage,
  IConversation,
  INotification,
  IMeeting,
  ICall,
  IUserSettings,
  CalendarView,
} from '../types/communication.types';
// Removed mock data imports - using API data instead
import {
  fetchUserTeams,
  createTeam as createTeamThunk,
  fetchTeamChannels,
  createChannel as createChannelThunk,
  fetchChannelMessages,
  fetchConversationMessages,
  sendMessage as sendMessageThunk,
  editMessage as editMessageThunk,
  deleteMessage as deleteMessageThunk,
  addReaction as addReactionThunk,
  removeReaction as removeReactionThunk,
  fetchUserConversations,
  fetchUserMeetings,
  createMeeting as createMeetingThunk,
  updateMeeting as updateMeetingThunk,
  cancelMeeting,
  fetchUserNotifications,
  markNotificationAsRead as markNotificationAsReadThunk,
  markAllNotificationsAsRead as markAllNotificationsAsReadThunk,
  deleteNotification as deleteNotificationThunk,
} from './communication.thunks';

interface CommunicationState {
  // Teams & Channels
  teams: ITeam[];
  selectedTeamId: string | null;
  channels: IChannel[];
  selectedChannelId: string | null;

  // Messages
  messages: { [key: string]: IMessage[] };

  // Direct Messages
  conversations: IConversation[];
  selectedConversationId: string | null;
  dmMessages: { [key: string]: IMessage[] };

  // Notifications
  notifications: INotification[];
  unreadNotificationsCount: number;

  // Meetings
  meetings: IMeeting[];
  calendarView: CalendarView;

  // Call
  activeCall: ICall | null;

  // Settings
  settings: IUserSettings;

  // UI State
  showNotifications: boolean;
  showSettings: boolean;
  showCreateChannel: boolean;
  showCreateTeam: boolean;
  showCreateMeeting: boolean;
  showMeetingDetails: IMeeting | null;

  // View mode
  viewMode: 'channel' | 'dm' | 'calendar';
}

const initialState: CommunicationState = {
  teams: [],
  selectedTeamId: null,
  channels: [],
  selectedChannelId: null,
  messages: {},
  conversations: [],
  selectedConversationId: null,
  dmMessages: {},
  notifications: [],
  unreadNotificationsCount: 0,
  meetings: [],
  calendarView: 'week',
  activeCall: null,
  settings: {
    theme: 'light',
    notifications: {
      mentions: true,
      directMessages: true,
      channelMessages: true,
      meetings: true,
      sound: true,
    },
    profile: {
      name: '',
      avatar: '',
      status: 'online',
    },
  },
  showNotifications: false,
  showSettings: false,
  showCreateChannel: false,
  showCreateTeam: false,
  showCreateMeeting: false,
  showMeetingDetails: null,
  viewMode: 'channel',
};

const communicationSlice = createSlice({
  name: 'communication',
  initialState,
  reducers: {
    // ==================== TEAM ACTIONS ====================
    selectTeam: (state, action: PayloadAction<string>) => {
      state.selectedTeamId = action.payload;
      // Auto-select first channel of the team
      const teamChannels = state.channels.filter((c) => c.teamId === action.payload);
      state.selectedChannelId = teamChannels[0]?._id || null;
    },

    addTeam: (state, action: PayloadAction<ITeam>) => {
      state.teams.push(action.payload);
    },

    // ==================== CHANNEL ACTIONS ====================
    selectChannel: (state, action: PayloadAction<string>) => {
      state.selectedChannelId = action.payload;
      state.viewMode = 'channel';
      state.selectedConversationId = null;

      // Mark channel as read
      const channel = state.channels.find((c) => c._id === action.payload);
      if (channel) {
        channel.unreadCount = 0;
      }
    },

    addChannel: (state, action: PayloadAction<IChannel>) => {
      state.channels.push(action.payload);
      state.messages[action.payload._id] = [];
    },

    updateChannelUnread: (state, action: PayloadAction<{ channelId: string; count: number }>) => {
      const channel = state.channels.find((c) => c._id === action.payload.channelId);
      if (channel) {
        channel.unreadCount = action.payload.count;
      }
    },

    // ==================== MESSAGE ACTIONS ====================
    sendMessage: (state, action: PayloadAction<IMessage>) => {
      const { channelId, conversationId } = action.payload;

      if (channelId) {
        if (!state.messages[channelId]) {
          state.messages[channelId] = [];
        }
        state.messages[channelId].push(action.payload);

        // Update channel last message
        const channel = state.channels.find((c) => c._id === channelId);
        if (channel) {
          channel.lastMessage = action.payload;
        }
      } else if (conversationId) {
        if (!state.dmMessages[conversationId]) {
          state.dmMessages[conversationId] = [];
        }
        state.dmMessages[conversationId].push(action.payload);

        // Update conversation last message
        const conversation = state.conversations.find((c) => c._id === conversationId);
        if (conversation) {
          conversation.lastMessage = action.payload;
        }
      }
    },

    addReaction: (
      state,
      action: PayloadAction<{ messageId: string; emoji: string; userId: string; channelId?: string; conversationId?: string }>
    ) => {
      const { messageId, emoji, userId, channelId, conversationId } = action.payload;

      const messages = channelId ? state.messages[channelId] : conversationId ? state.dmMessages[conversationId] : null;

      if (messages) {
        const message = messages.find((m) => m._id === messageId);
        if (message) {
          if (!message.reactions) {
            message.reactions = [];
          }

          const existingReaction = message.reactions.find((r) => r.emoji === emoji);
          if (existingReaction) {
            if (!existingReaction.users.includes(userId)) {
              existingReaction.users.push(userId);
              existingReaction.count++;
            }
          } else {
            message.reactions.push({
              emoji,
              users: [userId],
              count: 1,
            });
          }
        }
      }
    },

    removeReaction: (
      state,
      action: PayloadAction<{ messageId: string; emoji: string; userId: string; channelId?: string; conversationId?: string }>
    ) => {
      const { messageId, emoji, userId, channelId, conversationId } = action.payload;

      const messages = channelId ? state.messages[channelId] : conversationId ? state.dmMessages[conversationId] : null;

      if (messages) {
        const message = messages.find((m) => m._id === messageId);
        if (message && message.reactions) {
          const reaction = message.reactions.find((r) => r.emoji === emoji);
          if (reaction) {
            reaction.users = reaction.users.filter((u) => u !== userId);
            reaction.count = reaction.users.length;

            if (reaction.count === 0) {
              message.reactions = message.reactions.filter((r) => r.emoji !== emoji);
            }
          }
        }
      }
    },

    // ==================== CONVERSATION ACTIONS ====================
    selectConversation: (state, action: PayloadAction<string>) => {
      state.selectedConversationId = action.payload;
      state.viewMode = 'dm';
      state.selectedChannelId = null;

      // Mark conversation as read
      const conversation = state.conversations.find((c) => c._id === action.payload);
      if (conversation) {
        conversation.unreadCount = 0;
      }
    },

    addConversation: (state, action: PayloadAction<IConversation>) => {
      state.conversations.push(action.payload);
      state.dmMessages[action.payload._id] = [];
    },

    // ==================== NOTIFICATION ACTIONS ====================
    addNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications.unshift(action.payload);
      if (!action.payload.isRead) {
        state.unreadNotificationsCount++;
      }
    },

    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find((n) => n._id === action.payload);
      if (notification && !notification.isRead) {
        notification.isRead = true;
        state.unreadNotificationsCount--;
      }
    },

    markAllNotificationsAsRead: (state) => {
      state.notifications.forEach((n) => {
        n.isRead = true;
      });
      state.unreadNotificationsCount = 0;
    },

    // ==================== MEETING ACTIONS ====================
    addMeeting: (state, action: PayloadAction<IMeeting>) => {
      state.meetings.push(action.payload);
    },

    updateMeeting: (state, action: PayloadAction<IMeeting>) => {
      const index = state.meetings.findIndex((m) => m._id === action.payload._id);
      if (index !== -1) {
        state.meetings[index] = action.payload;
      }
    },

    deleteMeeting: (state, action: PayloadAction<string>) => {
      state.meetings = state.meetings.filter((m) => m._id !== action.payload);
    },

    setCalendarView: (state, action: PayloadAction<CalendarView>) => {
      state.calendarView = action.payload;
    },

    // ==================== CALL ACTIONS ====================
    startCall: (state, action: PayloadAction<ICall>) => {
      state.activeCall = action.payload;
    },

    endCall: (state) => {
      if (state.activeCall) {
        state.activeCall.status = 'ended';
        state.activeCall.endTime = new Date();
      }
      state.activeCall = null;
    },

    toggleMute: (state, action: PayloadAction<string>) => {
      if (state.activeCall) {
        const participant = state.activeCall.participants.find((p) => p.user._id === action.payload);
        if (participant) {
          participant.isMuted = !participant.isMuted;
        }
      }
    },

    toggleCamera: (state, action: PayloadAction<string>) => {
      if (state.activeCall) {
        const participant = state.activeCall.participants.find((p) => p.user._id === action.payload);
        if (participant) {
          participant.isCameraOff = !participant.isCameraOff;
        }
      }
    },

    toggleScreenShare: (state, action: PayloadAction<string>) => {
      if (state.activeCall) {
        const participant = state.activeCall.participants.find((p) => p.user._id === action.payload);
        if (participant) {
          participant.isScreenSharing = !participant.isScreenSharing;
        }
      }
    },

    // ==================== SETTINGS ACTIONS ====================
    updateSettings: (state, action: PayloadAction<Partial<IUserSettings>>) => {
      state.settings = { ...state.settings, ...action.payload };
    },

    toggleTheme: (state) => {
      state.settings.theme = state.settings.theme === 'light' ? 'dark' : 'light';
    },

    // ==================== UI ACTIONS ====================
    toggleNotifications: (state) => {
      state.showNotifications = !state.showNotifications;
    },

    toggleSettings: (state) => {
      state.showSettings = !state.showSettings;
    },

    toggleCreateChannel: (state) => {
      state.showCreateChannel = !state.showCreateChannel;
    },

    toggleCreateTeam: (state) => {
      state.showCreateTeam = !state.showCreateTeam;
    },

    toggleCreateMeeting: (state) => {
      state.showCreateMeeting = !state.showCreateMeeting;
    },

    setMeetingDetails: (state, action: PayloadAction<IMeeting | null>) => {
      state.showMeetingDetails = action.payload;
    },

    setViewMode: (state, action: PayloadAction<'channel' | 'dm' | 'calendar'>) => {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    // ==================== TEAM THUNKS ====================
    builder.addCase(fetchUserTeams.fulfilled, (state, action) => {
      state.teams = action.payload;
      if (action.payload.length > 0 && !state.selectedTeamId) {
        state.selectedTeamId = action.payload[0]._id;
      }
    });

    builder.addCase(createTeamThunk.fulfilled, (state, action) => {
      state.teams.push(action.payload);
      state.selectedTeamId = action.payload._id;
    });

    // ==================== CHANNEL THUNKS ====================
    builder.addCase(fetchTeamChannels.fulfilled, (state, action) => {
      state.channels = action.payload;
      if (action.payload.length > 0 && !state.selectedChannelId) {
        state.selectedChannelId = action.payload[0]._id;
      }
    });

    builder.addCase(createChannelThunk.fulfilled, (state, action) => {
      state.channels.push(action.payload);
      state.messages[action.payload._id] = [];
      state.selectedChannelId = action.payload._id;
    });

    // ==================== MESSAGE THUNKS ====================
    builder.addCase(fetchChannelMessages.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        const channelId = action.payload[0].channelId;
        if (channelId) {
          state.messages[channelId] = action.payload;
        }
      }
    });

    builder.addCase(fetchConversationMessages.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        const conversationId = action.payload[0].conversationId;
        if (conversationId) {
          state.dmMessages[conversationId] = action.payload;
        }
      }
    });

    builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
      const { channelId, conversationId } = action.payload;
      if (channelId) {
        if (!state.messages[channelId]) {
          state.messages[channelId] = [];
        }
        state.messages[channelId].push(action.payload);
        const channel = state.channels.find((c) => c._id === channelId);
        if (channel) {
          channel.lastMessage = action.payload;
        }
      } else if (conversationId) {
        if (!state.dmMessages[conversationId]) {
          state.dmMessages[conversationId] = [];
        }
        state.dmMessages[conversationId].push(action.payload);
        const conversation = state.conversations.find((c) => c._id === conversationId);
        if (conversation) {
          conversation.lastMessage = action.payload;
        }
      }
    });

    builder.addCase(editMessageThunk.fulfilled, (state, action) => {
      const { _id, channelId, conversationId, content, isEdited } = action.payload;
      const messages = channelId ? state.messages[channelId] : conversationId ? state.dmMessages[conversationId] : null;
      if (messages) {
        const message = messages.find((m) => m._id === _id);
        if (message) {
          message.content = content;
          message.isEdited = isEdited;
        }
      }
    });

    builder.addCase(deleteMessageThunk.fulfilled, (state, action) => {
      const messageId = action.payload;
      // Remove from all message arrays
      Object.keys(state.messages).forEach((channelId) => {
        state.messages[channelId] = state.messages[channelId].filter((m) => m._id !== messageId);
      });
      Object.keys(state.dmMessages).forEach((conversationId) => {
        state.dmMessages[conversationId] = state.dmMessages[conversationId].filter((m) => m._id !== messageId);
      });
    });

    builder.addCase(addReactionThunk.fulfilled, (state, action) => {
      const message = action.payload;
      const messages = message.channelId ? state.messages[message.channelId] : message.conversationId ? state.dmMessages[message.conversationId] : null;
      if (messages) {
        const index = messages.findIndex((m) => m._id === message._id);
        if (index !== -1) {
          messages[index] = message;
        }
      }
    });

    builder.addCase(removeReactionThunk.fulfilled, (state, action) => {
      const message = action.payload;
      const messages = message.channelId ? state.messages[message.channelId] : message.conversationId ? state.dmMessages[message.conversationId] : null;
      if (messages) {
        const index = messages.findIndex((m) => m._id === message._id);
        if (index !== -1) {
          messages[index] = message;
        }
      }
    });

    // ==================== CONVERSATION THUNKS ====================
    builder.addCase(fetchUserConversations.fulfilled, (state, action) => {
      state.conversations = action.payload;
    });

    // ==================== MEETING THUNKS ====================
    builder.addCase(fetchUserMeetings.fulfilled, (state, action) => {
      state.meetings = action.payload;
    });

    builder.addCase(createMeetingThunk.fulfilled, (state, action) => {
      state.meetings.push(action.payload);
    });

    builder.addCase(updateMeetingThunk.fulfilled, (state, action) => {
      const index = state.meetings.findIndex((m) => m._id === action.payload._id);
      if (index !== -1) {
        state.meetings[index] = action.payload;
      }
    });

    builder.addCase(cancelMeeting.fulfilled, (state, action) => {
      state.meetings = state.meetings.filter((m) => m._id !== action.payload);
    });

    // ==================== NOTIFICATION THUNKS ====================
    builder.addCase(fetchUserNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.unreadNotificationsCount = action.payload.filter((n) => !n.isRead).length;
    });

    builder.addCase(markNotificationAsReadThunk.fulfilled, (state, action) => {
      const notification = state.notifications.find((n) => n._id === action.payload);
      if (notification && !notification.isRead) {
        notification.isRead = true;
        state.unreadNotificationsCount--;
      }
    });

    builder.addCase(markAllNotificationsAsReadThunk.fulfilled, (state) => {
      state.notifications.forEach((n) => {
        n.isRead = true;
      });
      state.unreadNotificationsCount = 0;
    });

    builder.addCase(deleteNotificationThunk.fulfilled, (state, action) => {
      const notification = state.notifications.find((n) => n._id === action.payload);
      if (notification && !notification.isRead) {
        state.unreadNotificationsCount--;
      }
      state.notifications = state.notifications.filter((n) => n._id !== action.payload);
    });
  },
});

export const {
  selectTeam,
  addTeam,
  selectChannel,
  addChannel,
  updateChannelUnread,
  sendMessage,
  addReaction,
  removeReaction,
  selectConversation,
  addConversation,
  addNotification,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  addMeeting,
  updateMeeting,
  deleteMeeting,
  setCalendarView,
  startCall,
  endCall,
  toggleMute,
  toggleCamera,
  toggleScreenShare,
  updateSettings,
  toggleTheme,
  toggleNotifications,
  toggleSettings,
  toggleCreateChannel,
  toggleCreateTeam,
  toggleCreateMeeting,
  setMeetingDetails,
  setViewMode,
} = communicationSlice.actions;

// Export thunks for components to use
export {
  fetchUserTeams,
  createTeamThunk,
  fetchTeamChannels,
  createChannelThunk,
  fetchChannelMessages,
  fetchConversationMessages,
  sendMessageThunk,
  editMessageThunk,
  deleteMessageThunk,
  addReactionThunk,
  removeReactionThunk,
  fetchUserConversations,
  fetchUserMeetings,
  createMeetingThunk,
  updateMeetingThunk,
  cancelMeeting,
  fetchUserNotifications,
  markNotificationAsReadThunk,
  markAllNotificationsAsReadThunk,
  deleteNotificationThunk,
};

export default communicationSlice.reducer;
