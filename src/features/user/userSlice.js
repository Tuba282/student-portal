import { createSlice } from "@reduxjs/toolkit";


// Safe localStorage read
const loadUserFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Basic validation: ensure object has expected keys
    if (parsed && typeof parsed === "object") return parsed;
    return null;
  } catch (e) {
    console.warn("Failed to parse user from localStorage", e);
    return null;
  }
};

const initialState = {
  user: loadUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Overwrite full user object (expects { name, email, password })
    setUser: (state, action) => {
      state.user = action.payload;
      try {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } catch (e) {
        console.warn("Failed to save user to localStorage", e);
      }
    },
    // Partial update: pass an object with fields to update
    updateUser: (state, action) => {
      state.user = { ...(state.user || {}), ...action.payload };
      try {
        localStorage.setItem("user", JSON.stringify(state.user));
      } catch (e) {
        console.warn("Failed to save user to localStorage", e);
      }
    },
    logout: (state) => {
      state.user = null;
      try {
        localStorage.removeItem("user");
      } catch (e) {
        console.warn("Failed to remove user from localStorage", e);
      }
    },
  },
});

export const { setUser, updateUser, logout } = userSlice.actions;

// Selector
export const selectUser = (state) => state.user?.user || null;

export default userSlice.reducer;
