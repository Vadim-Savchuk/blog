import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'utils/axios';

import { User } from 'types/types';

type UserState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  token: localStorage.getItem('token') || null,
  error: null,
  loading: false,
};

// Register user ===>

type RegiseResponse = {
  newUser: User;
  token: string;
};

type RegisterRequest = {
  email: string;
  password: string;
};

// prettier-ignore
export const registerUser = createAsyncThunk<RegiseResponse, RegisterRequest, { rejectValue: string }> (
  'user/registerUser', 
  async (request, { rejectWithValue }) => {
    const response = await axios.post('/auth/register', {
      email: request.email,
      password: request.password,
    });

    if (response.status !== 201) {
      return rejectWithValue('Error into function registerUser in userSlice');
    }

    if (response.data.token) {
      window.localStorage.setItem('token', response.data.token);
    }

    return response.data;
});

// Login user ===>

type LoginResponse = {
  user: User;
  token: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

// prettier-ignore
export const loginUser = createAsyncThunk<LoginResponse, LoginRequest, { rejectValue: string }>(
  'user/loginUser',
  async (request, { rejectWithValue }) => {
    const response = await axios.post('/auth/login', {
      email: request.email,
      password: request.password,
    });

    if (response.status !== 200) {
      return rejectWithValue('Error into function loginUser in userSlice');
    }

    if (response.data.token) {
      window.localStorage.setItem('token', response.data.token);
    }

    return response.data;
});

// Get user ===>

type GetUserResponse = {
  user: User;
  token: string;
};

// prettier-ignore
export const getUser = createAsyncThunk<GetUserResponse, undefined, { rejectValue: string }> (
  'user/getUser', 
  async (_, { rejectWithValue }) => {
    const response = await axios.get('/auth/me');

    if (response.status !== 200) {
      return rejectWithValue('Error into function loginUser in userSlice');
    }

    return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      // Register User ===>
      .addCase(registerUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.newUser;
        state.token = action.payload.token;
      })
      // Login User ===>
      .addCase(loginUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      // Get User ===>
      .addCase(getUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
      });
  },
});

// export const isAuth = useAppSelector(state => Boolean(state.user.token));

export const { logout } = userSlice.actions;

export default userSlice.reducer;
