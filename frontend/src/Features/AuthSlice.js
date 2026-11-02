import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    isInitialized: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isInitialized = true;
            state.loading = false;
            state.error = null;
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isInitialized = true;
            state.loading = false;
            state.error = null;
        },

        setAuthInitialized: (state) => {
            state.isInitialized = true;
        },

        setAuthLoading: (state, action) => {
            state.loading = action.payload;
        },

        setAuthError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        clearAuthError: (state) => {
            state.error = null;
        },
    },
});

export const {
    loginSuccess,
    logout,
    setAuthInitialized,
    setAuthLoading,
    setAuthError,
    clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;
