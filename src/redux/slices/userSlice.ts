import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from '@reduxjs/toolkit';

import axios from 'utils/axios';

import { User } from 'types/types';

type UserState = {
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
};

// Register User

type RegisterRequest = {
  email: string;
  password: string;
};

type RegisterResponse = {
  newUser: User;
  token: string;
};

export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterRequest,
  { rejectValue: string }
>('auth/registerUser', async (request, { rejectWithValue }) => {
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

// Login User

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: User;
  token: string;
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>('auth/loginUser', async (request, { rejectWithValue }) => {
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

// Get User

type GetMeResponse = {
  user: User;
  token: string;
};

export const getMe = createAsyncThunk<
  GetMeResponse,
  undefined,
  { rejectValue: string }
>('auth/getMe', async (_, { rejectWithValue }) => {
  const response = await axios.get('/auth/me');

  if (response.status !== 200) {
    return rejectWithValue('Error into function getMe in userSlice');
  }

  return response.data;
});

const initialState: UserState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Register User
      .addCase(registerUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.newUser;
        state.token = action.payload.token;
      })
      // Login User
      .addCase(loginUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      // Get User
      .addCase(getMe.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload?.token;
        state.user = action.payload?.user;
      })
      // Error Middleware
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
