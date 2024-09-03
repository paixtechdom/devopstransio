// store

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface NavInterface {
    showNavbar: boolean,
    currentNav: number,
    scrolledDown: boolean,
    currentService: number,
    currentHoveredService: number,
}

const initialState: NavInterface  = {
    showNavbar: false,
    currentNav: 0,
    scrolledDown: false,
    currentService: -1,
    currentHoveredService: -1,
}

 

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        toggleShowNav: (state) => {
            state.showNavbar = !state.showNavbar;
        },
        setCurrentNav: (state, action: PayloadAction<number>) => {
            state.currentNav = action.payload
        },
        toggleScrolledDown: (state, action: PayloadAction<boolean>) => {
            state.scrolledDown = action.payload
        },
        setCurrentService: (state, action: PayloadAction<number>) => {
            state.currentService = action.payload
        },
        setCurrentHoveredService: (state, action: PayloadAction<number>) => {
            state.currentHoveredService = action.payload
        },
    }
})


export const { toggleShowNav, setCurrentNav, toggleScrolledDown, setCurrentService, setCurrentHoveredService } = navigationSlice.actions


export default navigationSlice.reducer