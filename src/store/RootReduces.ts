import {combineReducers} from '@reduxjs/toolkit';
import AuthSlice from './slices/authSlice';
import { apiSlice } from './slices/apis/apiSlice';
import MenuSlice from './slices/menuSlice';

export const RootReducer = combineReducers({
    auth: AuthSlice.reducer,
    menu: MenuSlice.reducer,
    [apiSlice.reducerPath] : apiSlice.reducer,
});

export type RootState = ReturnType<typeof RootReducer>;