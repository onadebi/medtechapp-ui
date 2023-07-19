import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import appsettings from '../../../configs/appsettings';

const baseQuery = fetchBaseQuery({
    baseUrl: appsettings.backend.baseUrl, // this is left black because the api is already specified in the proxy object in the vite.config file
    mode: 'cors',
    credentials: 'same-origin',
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: ()=>({})// (builder)=>({})
});

