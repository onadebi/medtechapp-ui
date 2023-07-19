import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TMenuModel from "../../models/TMenuModel";


const initialState: TMenuModel[] = [];

const MenuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        getAllMenu: (state, action: PayloadAction<TMenuModel[]>) => {
            state = action.payload;

        }
    }

});

export default MenuSlice;

export const { getAllMenu } = MenuSlice.actions;