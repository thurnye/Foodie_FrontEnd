import { io, Socket } from 'socket.io-client';
import { IMessage } from '../types/communication.types';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3009';

class SocketService {
  private socket: Socket | null = null;
  private userId: string | null = null;

  /**
   * Connect to WebSocket server
   */
  connect(userId: string): void {
    if (this.socket?.connected) {
      console.log('[Socket] Already connected');
      return;
    }

    this.userId = userId;

    this.socket = io(SOCKET_URL, {
      auth: {
        userId,
      },
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      console.log('[Socket] Connected to communication service');
    });

    this.socket.on('disconnect', () => {
      console.log('[Socket] Disconnected from communication service');
    });

    this.socket.on('connect_error', (error) => {
      console.error('[Socket] Connection error:', error);
    });
  }

  /**
   * Disconnect from WebSocket server
   */
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.userId = null;
      console.log('[Socket] Disconnected');
    }
  }

  /**
   * Join a channel room
   */
  joinChannel(channelId: string): void {
    if (this.socket) {
      this.socket.emit('channel:join', { channelId });
      console.log('[Socket] Joined channel:', channelId);
    }
  }

  /**
   * Leave a channel room
   */
  leaveChannel(channelId: string): void {
    if (this.socket) {
      this.socket.emit('channel:leave', { channelId });
      console.log('[Socket] Left channel:', channelId);
    }
  }

  /**
   * Join a conversation room
   */
  joinConversation(conversationId: string): void {
    if (this.socket) {
      this.socket.emit('conversation:join', { conversationId });
      console.log('[Socket] Joined conversation:', conversationId);
    }
  }

  /**
   * Leave a conversation room
   */
  leaveConversation(conversationId: string): void {
    if (this.socket) {
      this.socket.emit('conversation:leave', { conversationId });
      console.log('[Socket] Left conversation:', conversationId);
    }
  }

  /**
   * Send a message (real-time)
   */
  sendMessage(data: {
    channelId?: string;
    conversationId?: string;
    content: string;
    type?: 'text' | 'file' | 'image' | 'video';
    attachments?: any[];
    mentions?: string[];
    replyTo?: string;
  }): void {
    if (this.socket) {
      this.socket.emit('message:send', data);
    }
  }

  /**
   * Edit a message (real-time)
   */
  editMessage(messageId: string, content: string): void {
    if (this.socket) {
      this.socket.emit('message:edit', { messageId, content });
    }
  }

  /**
   * Delete a message (real-time)
   */
  deleteMessage(messageId: string): void {
    if (this.socket) {
      this.socket.emit('message:delete', { messageId });
    }
  }

  /**
   * Add reaction to message (real-time)
   */
  addReaction(messageId: string, emoji: string): void {
    if (this.socket) {
      this.socket.emit('message:reaction:add', { messageId, emoji });
    }
  }

  /**
   * Remove reaction from message (real-time)
   */
  removeReaction(messageId: string, emoji: string): void {
    if (this.socket) {
      this.socket.emit('message:reaction:remove', { messageId, emoji });
    }
  }

  /**
   * Start typing indicator
   */
  startTyping(channelId?: string, conversationId?: string): void {
    if (this.socket) {
      this.socket.emit('typing:start', { channelId, conversationId });
    }
  }

  /**
   * Stop typing indicator
   */
  stopTyping(channelId?: string, conversationId?: string): void {
    if (this.socket) {
      this.socket.emit('typing:stop', { channelId, conversationId });
    }
  }

  /**
   * Update user status
   */
  updateStatus(status: 'online' | 'away' | 'busy' | 'offline'): void {
    if (this.socket) {
      this.socket.emit('status:change', { status });
    }
  }

  /**
   * Listen for new messages
   */
  onNewMessage(callback: (message: IMessage) => void): void {
    if (this.socket) {
      this.socket.on('message:new', callback);
    }
  }

  /**
   * Listen for message updates
   */
  onMessageUpdated(callback: (message: IMessage) => void): void {
    if (this.socket) {
      this.socket.on('message:updated', callback);
    }
  }

  /**
   * Listen for message deletions
   */
  onMessageDeleted(callback: (data: { messageId: string }) => void): void {
    if (this.socket) {
      this.socket.on('message:deleted', callback);
    }
  }

  /**
   * Listen for reaction added
   */
  onReactionAdded(
    callback: (data: {
      messageId: string;
      reaction: { userId: string; emoji: string };
    }) => void
  ): void {
    if (this.socket) {
      this.socket.on('message:reaction:added', callback);
    }
  }

  /**
   * Listen for reaction removed
   */
  onReactionRemoved(
    callback: (data: { messageId: string; userId: string; emoji: string }) => void
  ): void {
    if (this.socket) {
      this.socket.on('message:reaction:removed', callback);
    }
  }

  /**
   * Listen for user started typing
   */
  onUserStartedTyping(
    callback: (data: {
      userId: string;
      channelId?: string;
      conversationId?: string;
    }) => void
  ): void {
    if (this.socket) {
      this.socket.on('typing:user-started', callback);
    }
  }

  /**
   * Listen for user stopped typing
   */
  onUserStoppedTyping(
    callback: (data: {
      userId: string;
      channelId?: string;
      conversationId?: string;
    }) => void
  ): void {
    if (this.socket) {
      this.socket.on('typing:user-stopped', callback);
    }
  }

  /**
   * Listen for user status change
   */
  onUserStatusChanged(
    callback: (data: {
      userId: string;
      status: 'online' | 'away' | 'busy' | 'offline';
    }) => void
  ): void {
    if (this.socket) {
      this.socket.on('status:user-changed', callback);
    }
  }

  /**
   * Listen for mention notifications
   */
  onMentionNotification(
    callback: (data: {
      messageId: string;
      channelId?: string;
      conversationId?: string;
      sender: string;
    }) => void
  ): void {
    if (this.socket) {
      this.socket.on('notification:mention', callback);
    }
  }

  /**
   * Remove all listeners
   */
  removeAllListeners(): void {
    if (this.socket) {
      this.socket.removeAllListeners();
    }
  }

  /**
   * Check if socket is connected
   */
  isConnected(): boolean {
    return this.socket?.connected || false;
  }
}

export const socketService = new SocketService();
