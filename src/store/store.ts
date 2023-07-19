import { compose, configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./RootReduces";
import { apiSlice } from "./slices/apis/apiSlice";


const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    //enhancers: composeEnhancers,
    devTools: true,
});

export default store;