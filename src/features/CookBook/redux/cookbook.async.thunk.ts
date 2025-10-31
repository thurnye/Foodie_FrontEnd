import { createAsyncThunk } from '@reduxjs/toolkit';
import { cookbookService } from '../services/cookbook.service';
import {
  ICookbook,
  CreateCookbookData,
  UpdateCookbookData,
  CookbookQueryParams,
} from '../types/cookbook.types';




// Async thunks
export const createCookbook = createAsyncThunk(
  'cookbook/create',
  async (data: CreateCookbookData, { rejectWithValue }) => {
    try {
      const response = await cookbookService.createCookbook(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create cookbook');
    }
  }
);

export const fetchMyCookbooks = createAsyncThunk(
  'cookbook/fetchMy',
  async (params: CookbookQueryParams | undefined, { rejectWithValue }) => {
    try {
      const response = await cookbookService.getMyCookbooks(params);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch cookbooks');
    }
  }
);

export const fetchCookbookById = createAsyncThunk(
  'cookbook/fetchById',
  async (cookbookId: string, { rejectWithValue }) => {
    try {
      const response = await cookbookService.getCookbookById(cookbookId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch cookbook');
    }
  }
);

export const updateCookbook = createAsyncThunk(
  'cookbook/update',
  async (
    { cookbookId, data }: { cookbookId: string; data: UpdateCookbookData },
    { rejectWithValue }
  ) => {
    try {
      const response = await cookbookService.updateCookbook(cookbookId, data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update cookbook');
    }
  }
);

export const deleteCookbook = createAsyncThunk(
  'cookbook/delete',
  async (cookbookId: string, { rejectWithValue }) => {
    try {
      await cookbookService.deleteCookbook(cookbookId);
      return cookbookId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete cookbook');
    }
  }
);

export const generateCookbook = createAsyncThunk(
  'cookbook/generate',
  async (cookbookId: string, { rejectWithValue }) => {
    try {
      const response = await cookbookService.generateCookbook(cookbookId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to generate cookbook');
    }
  }
);

