import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGroup, IPost, IComment, IGroupFilters, IPostFilters } from '../types/community.types';

interface CommunityState {
  // Groups
  groups: IGroup[];
  selectedGroup: IGroup | null;
  myGroups: IGroup[];
  groupsLoading: boolean;
  groupsError: string | null;
  groupFilters: IGroupFilters;

  // Posts
  posts: IPost[];
  selectedPost: IPost | null;
  postsLoading: boolean;
  postsError: string | null;
  postFilters: IPostFilters;

  // Comments
  comments: { [postId: string]: IComment[] };
  commentsLoading: boolean;
  commentsError: string | null;
}

const initialState: CommunityState = {
  groups: [],
  selectedGroup: null,
  myGroups: [],
  groupsLoading: false,
  groupsError: null,
  groupFilters: {},

  posts: [],
  selectedPost: null,
  postsLoading: false,
  postsError: null,
  postFilters: {},

  comments: {},
  commentsLoading: false,
  commentsError: null,
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    // Group Actions
    setGroups: (state, action: PayloadAction<IGroup[]>) => {
      state.groups = action.payload;
      state.groupsLoading = false;
      state.groupsError = null;
    },
    setSelectedGroup: (state, action: PayloadAction<IGroup | null>) => {
      state.selectedGroup = action.payload;
    },
    setMyGroups: (state, action: PayloadAction<IGroup[]>) => {
      state.myGroups = action.payload;
    },
    addGroup: (state, action: PayloadAction<IGroup>) => {
      state.groups.unshift(action.payload);
      state.myGroups.unshift(action.payload);
    },
    updateGroup: (state, action: PayloadAction<IGroup>) => {
      state.groups = state.groups.map((g) => (g._id === action.payload._id ? action.payload : g));
      if (state.selectedGroup?._id === action.payload._id) {
        state.selectedGroup = action.payload;
      }
      state.myGroups = state.myGroups.map((g) => (g._id === action.payload._id ? action.payload : g));
    },
    removeGroup: (state, action: PayloadAction<string>) => {
      state.groups = state.groups.filter((g) => g._id !== action.payload);
      state.myGroups = state.myGroups.filter((g) => g._id !== action.payload);
      if (state.selectedGroup?._id === action.payload) {
        state.selectedGroup = null;
      }
    },
    setGroupsLoading: (state, action: PayloadAction<boolean>) => {
      state.groupsLoading = action.payload;
    },
    setGroupsError: (state, action: PayloadAction<string | null>) => {
      state.groupsError = action.payload;
      state.groupsLoading = false;
    },
    setGroupFilters: (state, action: PayloadAction<IGroupFilters>) => {
      state.groupFilters = action.payload;
    },

    // Post Actions
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
      state.postsLoading = false;
      state.postsError = null;
    },
    appendPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = [...state.posts, ...action.payload];
      state.postsLoading = false;
      state.postsError = null;
    },
    setSelectedPost: (state, action: PayloadAction<IPost | null>) => {
      state.selectedPost = action.payload;
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      state.posts = state.posts.map((p) => (p._id === action.payload._id ? action.payload : p));
      if (state.selectedPost?._id === action.payload._id) {
        state.selectedPost = action.payload;
      }
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((p) => p._id !== action.payload);
      if (state.selectedPost?._id === action.payload) {
        state.selectedPost = null;
      }
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.postsLoading = action.payload;
    },
    setPostsError: (state, action: PayloadAction<string | null>) => {
      state.postsError = action.payload;
      state.postsLoading = false;
    },
    setPostFilters: (state, action: PayloadAction<IPostFilters>) => {
      state.postFilters = action.payload;
    },

    // Comment Actions
    setComments: (state, action: PayloadAction<{ postId: string; comments: IComment[] }>) => {
      state.comments[action.payload.postId] = action.payload.comments;
      state.commentsLoading = false;
      state.commentsError = null;
    },
    addComment: (state, action: PayloadAction<{ postId: string; comment: IComment }>) => {
      const postComments = state.comments[action.payload.postId] || [];
      state.comments[action.payload.postId] = [action.payload.comment, ...postComments];

      // Update comment count in posts
      state.posts = state.posts.map((p) =>
        p._id === action.payload.postId ? { ...p, commentCount: p.commentCount + 1 } : p
      );
      if (state.selectedPost?._id === action.payload.postId) {
        state.selectedPost = { ...state.selectedPost, commentCount: state.selectedPost.commentCount + 1 };
      }
    },
    updateComment: (state, action: PayloadAction<{ postId: string; comment: IComment }>) => {
      const postComments = state.comments[action.payload.postId] || [];
      state.comments[action.payload.postId] = postComments.map((c) =>
        c._id === action.payload.comment._id ? action.payload.comment : c
      );
    },
    removeComment: (state, action: PayloadAction<{ postId: string; commentId: string }>) => {
      const postComments = state.comments[action.payload.postId] || [];
      state.comments[action.payload.postId] = postComments.filter((c) => c._id !== action.payload.commentId);

      // Update comment count in posts
      state.posts = state.posts.map((p) =>
        p._id === action.payload.postId ? { ...p, commentCount: Math.max(0, p.commentCount - 1) } : p
      );
      if (state.selectedPost?._id === action.payload.postId) {
        state.selectedPost = {
          ...state.selectedPost,
          commentCount: Math.max(0, state.selectedPost.commentCount - 1),
        };
      }
    },
    setCommentsLoading: (state, action: PayloadAction<boolean>) => {
      state.commentsLoading = action.payload;
    },
    setCommentsError: (state, action: PayloadAction<string | null>) => {
      state.commentsError = action.payload;
      state.commentsLoading = false;
    },

    // Clear all
    clearCommunityState: () => initialState,
  },
});

export const {
  setGroups,
  setSelectedGroup,
  setMyGroups,
  addGroup,
  updateGroup,
  removeGroup,
  setGroupsLoading,
  setGroupsError,
  setGroupFilters,
  setPosts,
  appendPosts,
  setSelectedPost,
  addPost,
  updatePost,
  removePost,
  setPostsLoading,
  setPostsError,
  setPostFilters,
  setComments,
  addComment,
  updateComment,
  removeComment,
  setCommentsLoading,
  setCommentsError,
  clearCommunityState,
} = communitySlice.actions;

export default communitySlice.reducer;
