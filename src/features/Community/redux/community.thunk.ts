import { createAsyncThunk } from '@reduxjs/toolkit';
import { communityService } from '../services/community.service';
import {
  ICreateGroup,
  IUpdateGroup,
  ICreatePost,
  IUpdatePost,
  ICreateComment,
  IUpdateComment,
  IGroupFilters,
  IPostFilters,
  ReactionType,
} from '../types/community.types';
import {
  setGroups,
  setMyGroups,
  setGroupsLoading,
  setGroupsError,
  setSelectedGroup,
  addGroup,
  updateGroup as updateGroupAction,
  removeGroup,
  setPosts,
  setPostsLoading,
  setPostsError,
  setSelectedPost,
  addPost,
  updatePost as updatePostAction,
  removePost,
  setComments,
  setCommentsLoading,
  setCommentsError,
  addComment,
  updateComment as updateCommentAction,
  removeComment,
} from './community.slice';

// ==================== GROUP THUNKS ====================

export const fetchGroups = createAsyncThunk(
  'community/fetchGroups',
  async (filters: IGroupFilters | undefined, { dispatch }) => {
    try {
      dispatch(setGroupsLoading(true));
      const groups = await communityService.getGroups(filters);
      dispatch(setGroups(groups));
      return groups;
    } catch (error: any) {
      const errorMsg = error?.response?.data?.message || 'Failed to fetch groups';
      dispatch(setGroupsError(errorMsg));
      throw error;
    }
  }
);

export const fetchGroupById = createAsyncThunk(
  'community/fetchGroupById',
  async (groupId: string, { dispatch }) => {
    try {
      dispatch(setGroupsLoading(true));
      const group = await communityService.getGroupById(groupId);
      dispatch(setSelectedGroup(group));
      dispatch(setGroupsLoading(false));
      return group;
    } catch (error: any) {
      const errorMsg = error?.response?.data?.message || 'Failed to fetch group';
      dispatch(setGroupsError(errorMsg));
      throw error;
    }
  }
);

export const fetchMyGroups = createAsyncThunk('community/fetchMyGroups', async (_, { dispatch }) => {
  try {
    dispatch(setGroupsLoading(true));
    const groups = await communityService.getMyGroups();
    dispatch(setMyGroups(groups));
    dispatch(setGroupsLoading(false));
    return groups;
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || 'Failed to fetch your groups';
    dispatch(setGroupsError(errorMsg));
    throw error;
  }
});

export const createGroup = createAsyncThunk(
  'community/createGroup',
  async (data: ICreateGroup, { dispatch }) => {
    try {
      const group = await communityService.createGroup(data);
      dispatch(addGroup(group));
      return group;
    } catch (error: any) {
      throw error;
    }
  }
);

export const updateGroup = createAsyncThunk(
  'community/updateGroup',
  async ({ groupId, data }: { groupId: string; data: IUpdateGroup }, { dispatch }) => {
    try {
      const group = await communityService.updateGroup(groupId, data);
      dispatch(updateGroupAction(group));
      return group;
    } catch (error: any) {
      throw error;
    }
  }
);

export const deleteGroup = createAsyncThunk('community/deleteGroup', async (groupId: string, { dispatch }) => {
  try {
    await communityService.deleteGroup(groupId);
    dispatch(removeGroup(groupId));
  } catch (error: any) {
    throw error;
  }
});

export const joinGroup = createAsyncThunk('community/joinGroup', async (groupId: string, { dispatch }) => {
  try {
    const group = await communityService.joinGroup(groupId);
    dispatch(updateGroupAction(group));
    return group;
  } catch (error: any) {
    throw error;
  }
});

export const leaveGroup = createAsyncThunk('community/leaveGroup', async (groupId: string, { dispatch }) => {
  try {
    await communityService.leaveGroup(groupId);
    dispatch(removeGroup(groupId));
  } catch (error: any) {
    throw error;
  }
});

// ==================== POST THUNKS ====================

export const fetchPosts = createAsyncThunk(
  'community/fetchPosts',
  async (filters: IPostFilters | undefined, { dispatch }) => {
    try {
      dispatch(setPostsLoading(true));
      const posts = await communityService.getPosts(filters);
      dispatch(setPosts(posts));
      return posts;
    } catch (error: any) {
      const errorMsg = error?.response?.data?.message || 'Failed to fetch posts';
      dispatch(setPostsError(errorMsg));
      throw error;
    }
  }
);

export const fetchPostById = createAsyncThunk('community/fetchPostById', async (postId: string, { dispatch }) => {
  try {
    dispatch(setPostsLoading(true));
    const post = await communityService.getPostById(postId);
    dispatch(setSelectedPost(post));
    dispatch(setPostsLoading(false));
    return post;
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || 'Failed to fetch post';
    dispatch(setPostsError(errorMsg));
    throw error;
  }
});

export const createPost = createAsyncThunk('community/createPost', async (data: ICreatePost, { dispatch }) => {
  try {
    const post = await communityService.createPost(data);
    dispatch(addPost(post));
    return post;
  } catch (error: any) {
    throw error;
  }
});

export const updatePost = createAsyncThunk(
  'community/updatePost',
  async ({ postId, data }: { postId: string; data: IUpdatePost }, { dispatch }) => {
    try {
      const post = await communityService.updatePost(postId, data);
      dispatch(updatePostAction(post));
      return post;
    } catch (error: any) {
      throw error;
    }
  }
);

export const deletePost = createAsyncThunk('community/deletePost', async (postId: string, { dispatch }) => {
  try {
    await communityService.deletePost(postId);
    dispatch(removePost(postId));
  } catch (error: any) {
    throw error;
  }
});

export const votePost = createAsyncThunk(
  'community/votePost',
  async ({ postId, value }: { postId: string; value: 1 | -1 }, { dispatch }) => {
    try {
      const post = await communityService.votePost(postId, value);
      dispatch(updatePostAction(post));
      return post;
    } catch (error: any) {
      throw error;
    }
  }
);

export const removePostVote = createAsyncThunk('community/removePostVote', async (postId: string, { dispatch }) => {
  try {
    const post = await communityService.removeVote(postId);
    dispatch(updatePostAction(post));
    return post;
  } catch (error: any) {
    throw error;
  }
});

export const reactToPost = createAsyncThunk(
  'community/reactToPost',
  async ({ postId, reactionType }: { postId: string; reactionType: ReactionType }, { dispatch }) => {
    try {
      const post = await communityService.reactToPost(postId, reactionType);
      dispatch(updatePostAction(post));
      return post;
    } catch (error: any) {
      throw error;
    }
  }
);

export const removePostReaction = createAsyncThunk(
  'community/removePostReaction',
  async (postId: string, { dispatch }) => {
    try {
      const post = await communityService.removeReaction(postId);
      dispatch(updatePostAction(post));
      return post;
    } catch (error: any) {
      throw error;
    }
  }
);

export const sharePost = createAsyncThunk(
  'community/sharePost',
  async ({ postId, platform }: { postId: string; platform?: string }) => {
    try {
      await communityService.sharePost(postId, platform);
    } catch (error: any) {
      throw error;
    }
  }
);

// ==================== COMMENT THUNKS ====================

export const fetchComments = createAsyncThunk('community/fetchComments', async (postId: string, { dispatch }) => {
  try {
    dispatch(setCommentsLoading(true));
    const comments = await communityService.getComments(postId);
    dispatch(setComments({ postId, comments }));
    return comments;
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || 'Failed to fetch comments';
    dispatch(setCommentsError(errorMsg));
    throw error;
  }
});

export const createComment = createAsyncThunk(
  'community/createComment',
  async (data: ICreateComment, { dispatch }) => {
    try {
      const comment = await communityService.createComment(data);
      dispatch(addComment({ postId: data.postId, comment }));
      return comment;
    } catch (error: any) {
      throw error;
    }
  }
);

export const updateComment = createAsyncThunk(
  'community/updateComment',
  async (
    { commentId, postId, data }: { commentId: string; postId: string; data: IUpdateComment },
    { dispatch }
  ) => {
    try {
      const comment = await communityService.updateComment(commentId, data);
      dispatch(updateCommentAction({ postId, comment }));
      return comment;
    } catch (error: any) {
      throw error;
    }
  }
);

export const deleteComment = createAsyncThunk(
  'community/deleteComment',
  async ({ commentId, postId }: { commentId: string; postId: string }, { dispatch }) => {
    try {
      await communityService.deleteComment(commentId);
      dispatch(removeComment({ postId, commentId }));
    } catch (error: any) {
      throw error;
    }
  }
);

export const voteComment = createAsyncThunk(
  'community/voteComment',
  async ({ commentId, postId, value }: { commentId: string; postId: string; value: 1 | -1 }, { dispatch }) => {
    try {
      const comment = await communityService.voteComment(commentId, value);
      dispatch(updateCommentAction({ postId, comment }));
      return comment;
    } catch (error: any) {
      throw error;
    }
  }
);

export const removeCommentVote = createAsyncThunk(
  'community/removeCommentVote',
  async ({ commentId, postId }: { commentId: string; postId: string }, { dispatch }) => {
    try {
      const comment = await communityService.removeCommentVote(commentId);
      dispatch(updateCommentAction({ postId, comment }));
      return comment;
    } catch (error: any) {
      throw error;
    }
  }
);
