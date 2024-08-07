// store

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface NavInterface {
    showNavbar: boolean,
    currentNav: number,
    currentDropDownIndex: number,
    scrolledDown: boolean,
    currentDropDown: string,
    currentService: number
}

const initialState: NavInterface  = {
    showNavbar: false,
    currentNav: 0,
    currentDropDownIndex: 0,
    scrolledDown: false,
    currentDropDown: "",
    currentService: -1    
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
        setCurrentDropDownIndex: (state, action: PayloadAction<number>) => {
            state.currentDropDownIndex = action.payload
        },
        toggleScrolledDown: (state, action: PayloadAction<boolean>) => {
            state.scrolledDown = action.payload
        },
        setCurrentDropDown: (state, action: PayloadAction<string>) => {
            state.currentDropDown = action.payload
        },
        setCurrentService: (state, action: PayloadAction<number>) => {
            state.currentService = action.payload
        },
    }
})


export const { toggleShowNav, setCurrentNav, setCurrentDropDownIndex, toggleScrolledDown, setCurrentDropDown, setCurrentService } = navigationSlice.actions


export default navigationSlice.reducer