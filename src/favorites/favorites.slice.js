import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const fovoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleToFavorites: (state, {payload:recipeId}) =>{
            const isExits = state.some(r => r.id === recipeId.id)
            if(isExits)
            state =state.filter(r => r.id !== recipeId.id)
            else
            state.push(recipeId)
        }
    }
})
export const {actions, reducer} = fovoriteSlice