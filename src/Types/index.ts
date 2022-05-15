import { initialState } from '../Redux/features/user';
import { store } from '../Redux/App/store';

export interface IClassData {
  className: string;
  studentsCodes: string[];
}

export type initialUserStateType = typeof initialState;
export type RootState = ReturnType<typeof store.getState>;
export type RootStateValue = RootState[keyof RootState]['value'];
export type AppDispatch = typeof store.dispatch;
