import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice/user.slice"; // ✅ default export ko import karo

export const store = configureStore({
  reducer: {
    user: userReducer, // key naam "user" rakho, "userSlice" mat rakho
  },
});
