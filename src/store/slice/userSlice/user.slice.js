import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: (state) => {
      state.isAuthenticated = true;
      console.log("Hello user");
    },
    Logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      console.log("User logged out");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Pending...");
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log("Fulfilled");
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        console.log("Rejected");
      });
  },
});

// Export actions
export const { Login, Logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
