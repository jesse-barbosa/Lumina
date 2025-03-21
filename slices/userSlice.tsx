import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number;
  name: string;
  email: string;
}

const initialState: UserState = {
  id: 0,
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser: () => initialState, // Reset to initial state on logout
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;