import appsettings from "../../../configs/appsettings";
import { apiSlice } from "./apiSlice";
import IUserLoginReq from '../../../models/IUserLoginReq.ts';
import TUserRegister from "../../../models/TUserRegister";
import GenResponse from "../../../models/GenResponse";

const BASE_URL = `${appsettings.backend.baseUrl}/Auth`;

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(data: IUserLoginReq)=> ({
                url: `${BASE_URL}/Login`,
                method: 'POST',
                body: data,                
            })
        }),
        logout: builder.mutation({
            query:()=>({
                url: `${BASE_URL}/logout`,
                method: 'POST',
            })
        }),
        register: builder.mutation<GenResponse<object>, TUserRegister>({
            query:(data: TUserRegister)=> ({
                url: `${BASE_URL}/Register`,
                method: 'POST',
                body: data
            })
        }),
    })
});

export const {useLoginMutation, useRegisterMutation, useLogoutMutation } = usersApiSlice;

