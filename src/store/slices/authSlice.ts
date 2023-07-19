import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import appsettings from '../../configs/appsettings';
import TUserLoginResp from '../../models/TUserLoginResp';


const userDetails :TUserLoginResp|null = localStorage.getItem(appsettings.token.key) ? JSON.parse(localStorage.getItem(appsettings.token.key) || '') : null;
const initialState  = {
    userInfo: userDetails //localStorage.getItem(appsettings.token.key) ? JSON.parse(localStorage.getItem(appsettings.token.key) || '') : null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<TUserLoginResp>) => {
            state.userInfo = action.payload;
            localStorage.setItem(appsettings.token.key, JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem(appsettings.token.key);
        }
    }
});

export default AuthSlice;
export const {
    logout
    , setCredentials } = AuthSlice.actions;
