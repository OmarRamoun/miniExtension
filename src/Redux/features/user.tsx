import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserStateType } from '../../Types/index';

const initialState = {
  value: {
    studentName: '',
    studentClasses: [
      {
        className: '',
        classPartners: [''],
      },
    ],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state: initialUserStateType,
      action: PayloadAction<initialUserStateType['value']>,
    ) => {
      state.value = action.payload;
    },
    logout: (state: initialUserStateType) => {
      state.value = initialState.value;
    },
  },
});

export { initialState };
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
