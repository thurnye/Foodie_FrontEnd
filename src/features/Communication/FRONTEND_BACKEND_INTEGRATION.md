# Communication Feature - Frontend-Backend Integration Guide

## Overview
The communication feature is now fully connected to the backend API. This document explains how to use the integrated API services and WebSocket functionality.

## Architecture

### Backend
- **API Gateway**: `http://localhost:8000/api`
- **Communication Service**: `http://localhost:3009`
- **Routes**: `/api/communication/*`
- **WebSocket**: `ws://localhost:3009`

### Frontend
- **API Service**: `services/communication.api.service.ts`
- **WebSocket Service**: `services/socket.service.ts`
- **Redux Thunks**: `redux/communication.thunks.ts`
- **Redux Slice**: `redux/communication.slice.ts`

## API Integration

### 1. Using API Services Directly

```typescript
import {
  TeamAPI,
  ChannelAPI,
  MessageAPI,
  ConversationAPI,
  MeetingAPI,
  NotificationAPI,
} from '../services/communication.api.service';

// Example: Fetch user teams
const teams = await TeamAPI.getUserTeams();

// Example: Create a channel
const channel = await ChannelAPI.createChannel({
  teamId: 'team-123',
  name: 'General',
  description: 'Team general discussion',
  type: 'text',
  isPrivate: false,
});

// Example: Send a message
const message = await MessageAPI.sendMessage({
  channelId: 'channel-123',
  content: 'Hello World!',
  type: 'text',
});
```

### 2. Using Redux Thunks (Recommended)

```typescript
import { useDispatch } from 'react-redux';
import {
  fetchUserTeams,
  createChannelThunk,
  sendMessageThunk,
  fetchChannelMessages,
} from '../redux/communication.slice';

function MyComponent() {
  const dispatch = useDispatch();

  // Fetch teams on mount
  useEffect(() => {
    dispatch(fetchUserTeams());
  }, [dispatch]);

  // Create a channel
  const handleCreateChannel = async () => {
    await dispatch(
      createChannelThunk({
        teamId: selectedTeamId,
        name: channelName,
        description: channelDescription,
      })
    ).unwrap();
  };

  // Send a message
  const handleSendMessage = async () => {
    await dispatch(
      sendMessageThunk({
        channelId: selectedChannelId,
        content: messageContent,
        type: 'text',
      })
    ).unwrap();
  };
}
```

## WebSocket Integration

### 1. Connecting to WebSocket

```typescript
import { useEffect } from 'react';
import { socketService } from '../services/socket.service';

function CommunicationLayout() {
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    // Connect to WebSocket when component mounts
    if (currentUser) {
      socketService.connect(currentUser._id);

      // Set up listeners
      socketService.onNewMessage((message) => {
        console.log('New message:', message);
        // Dispatch to Redux or update local state
      });

      socketService.onUserStatusChanged((data) => {
        console.log('User status changed:', data);
      });
    }

    // Cleanup on unmount
    return () => {
      socketService.disconnect();
    };
  }, [currentUser]);
}
```

### 2. Joining Rooms

```typescript
// Join a channel when user selects it
useEffect(() => {
  if (selectedChannelId) {
    socketService.joinChannel(selectedChannelId);

    // Leave previous channel if needed
    return () => {
      socketService.leaveChannel(selectedChannelId);
    };
  }
}, [selectedChannelId]);

// Join a conversation
useEffect(() => {
  if (selectedConversationId) {
    socketService.joinConversation(selectedConversationId);

    return () => {
      socketService.leaveConversation(selectedConversationId);
    };
  }
}, [selectedConversationId]);
```

### 3. Sending Real-Time Messages

```typescript
// Send via WebSocket (for real-time delivery)
socketService.sendMessage({
  channelId: 'channel-123',
  content: 'Hello!',
  type: 'text',
});

// OR send via API (also triggers WebSocket broadcast)
dispatch(
  sendMessageThunk({
    channelId: 'channel-123',
    content: 'Hello!',
  })
);
```

### 4. Typing Indicators

```typescript
const handleInputChange = (e) => {
  setMessage(e.target.value);

  // Start typing indicator
  socketService.startTyping(selectedChannelId);

  // Stop after delay
  clearTimeout(typingTimeoutRef.current);
  typingTimeoutRef.current = setTimeout(() => {
    socketService.stopTyping(selectedChannelId);
  }, 1000);
};
```

## Available Redux Thunks

### Teams
- `fetchUserTeams()` - Get all user teams
- `createTeamThunk({ name, description, members })` - Create a team
- `addTeamMembers({ teamId, userIds })` - Add members to team

### Channels
- `fetchTeamChannels(teamId)` - Get team channels
- `createChannelThunk({ teamId, name, description, type, isPrivate, members })` - Create channel

### Messages
- `fetchChannelMessages(channelId)` - Get channel messages
- `fetchConversationMessages(conversationId)` - Get DM messages
- `sendMessageThunk({ channelId, conversationId, content, type, attachments, mentions, replyTo })` - Send message
- `editMessageThunk({ messageId, content })` - Edit message
- `deleteMessageThunk(messageId)` - Delete message
- `addReactionThunk({ messageId, emoji })` - Add reaction
- `removeReactionThunk({ messageId, emoji })` - Remove reaction

### Conversations
- `fetchUserConversations()` - Get user conversations
- `createOrGetConversation(participants)` - Create or get conversation

### Meetings
- `fetchUserMeetings()` - Get user meetings
- `createMeetingThunk({ title, description, participants, teamId, channelId, startTime, endTime, isRecurring, recurrencePattern })` - Create meeting
- `updateMeetingThunk({ meetingId, data })` - Update meeting
- `cancelMeeting(meetingId)` - Cancel meeting

### Notifications
- `fetchUserNotifications()` - Get user notifications
- `markNotificationAsReadThunk(notificationId)` - Mark as read
- `markAllNotificationsAsReadThunk()` - Mark all as read
- `deleteNotificationThunk(notificationId)` - Delete notification

## WebSocket Events

### Sending Events
- `message:send` - Send a message
- `message:edit` - Edit a message
- `message:delete` - Delete a message
- `message:reaction:add` - Add reaction
- `message:reaction:remove` - Remove reaction
- `typing:start` - Start typing
- `typing:stop` - Stop typing
- `status:change` - Change user status
- `channel:join` - Join channel room
- `channel:leave` - Leave channel room
- `conversation:join` - Join conversation room
- `conversation:leave` - Leave conversation room

### Receiving Events
- `message:new` - New message received
- `message:updated` - Message edited
- `message:deleted` - Message deleted
- `message:reaction:added` - Reaction added
- `message:reaction:removed` - Reaction removed
- `typing:user-started` - User started typing
- `typing:user-stopped` - User stopped typing
- `status:user-changed` - User status changed
- `notification:mention` - User mentioned

## Environment Variables

Add to `.env` file:

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
REACT_APP_SOCKET_URL=http://localhost:3009
```

## Migration from Mock Data to API

### Before (Mock Data)
```typescript
import { mockTeams } from '../data/mockData';

function TeamsComponent() {
  const teams = mockTeams;
  // ...
}
```

### After (API Integration)
```typescript
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserTeams } from '../redux/communication.slice';

function TeamsComponent() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.communication.teams);

  useEffect(() => {
    dispatch(fetchUserTeams());
  }, [dispatch]);
  
  // ...
}
```

## Error Handling

```typescript
// With async/await and try/catch
const handleCreateChannel = async () => {
  try {
    const result = await dispatch(createChannelThunk(data)).unwrap();
    console.log('Channel created:', result);
  } catch (error) {
    console.error('Failed to create channel:', error);
    // Show error toast/notification
  }
};

// Or with promise .catch
dispatch(fetchUserTeams()).catch((error) => {
  console.error('Failed to fetch teams:', error);
});
```

## Testing the Integration

1. **Start the backend services:**
   ```bash
   # Terminal 1: API Gateway
   cd Foodie-Backend/api-gateway
   npm run dev

   # Terminal 2: Communication Service
   cd Foodie-Backend/services/communication-service
   npm run dev

   # Make sure MongoDB is running
   mongod
   ```

2. **Start the frontend:**
   ```bash
   cd Foodie_FrontEnd
   npm run dev
   ```

3. **Test API calls:**
   - Open browser DevTools Network tab
   - Navigate to communication feature
   - Check for API calls to `/api/communication/*`

4. **Test WebSocket:**
   - Open browser DevTools Console
   - Look for `[Socket] Connected to communication service`
   - Send a message and check for real-time updates

## Next Steps

1. Update components to use Redux thunks instead of mock data
2. Implement WebSocket listeners in main layout component
3. Add loading states for async operations
4. Add error handling and retry logic
5. Implement optimistic updates for better UX
6. Add authentication token to WebSocket connection
7. Test with multiple browser tabs for real-time features

## Troubleshooting

### API Calls Failing
- Check if API Gateway is running on port 8000
- Check if Communication Service is running on port 3009
- Verify MongoDB is running
- Check browser console for CORS errors

### WebSocket Not Connecting
- Verify `REACT_APP_SOCKET_URL` environment variable
- Check if Communication Service is running
- Look for connection errors in browser console
- Verify user authentication

### Messages Not Updating in Real-Time
- Check if WebSocket is connected
- Verify you joined the correct room (channel/conversation)
- Check Redux DevTools for dispatched actions
- Look for WebSocket events in browser console
