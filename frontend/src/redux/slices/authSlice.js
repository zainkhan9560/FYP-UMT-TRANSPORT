
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import summaryApi from "../../utils";
const getErrorMessage = (error, fallbackMessage) => {
  const responseData = error.response?.data;

  if (typeof responseData === "string") {
    return responseData;
  }

  return (
    responseData?.message ||
    error.message ||
    fallbackMessage
  );
};

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios({
        url: summaryApi.login.url,
        method: summaryApi.login.method,
        data: { email, password },
        withCredentials: true,
      });

      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error, "Login failed.")
      );
    }
  }
);

// SIGNUP
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    { name, email, password, confirmPassword },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios({
        url: summaryApi.signUp.url,
        method: summaryApi.signUp.method,
        data: {
          name,
          email,
          password,
          confirmPassword,
        },
        withCredentials: true,
      });

      if (!response.data.success) {
        return rejectWithValue(
          response.data.message || "Signup failed."
        );
      }

      // Your backend returns a message, not a user object.
      return response.data;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error, "Signup failed.")
      );
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
  signupSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    resetSignupSuccess: (state) => {
      state.signupSuccess = false;
    },

    clearAuthError: (state) => {
      state.error = null;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed.";
      })

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.signupSuccess = false;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.signupSuccess = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed.";
      });
  },
});

export const {
  resetSignupSuccess,
  clearAuthError,
  clearUser,
} = authSlice.actions;

export default authSlice.reducer;
