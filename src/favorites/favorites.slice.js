import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const fovoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleToFavorites: (state, { payload: recipe }) => {
            const isExits = state.some(r => r.id === recipe.id)
            if (isExits) {
                const index = state.findIndex(item => item.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            }
            else
                state.push(recipe)
        }
    }
})
export const { actions, reducer } = fovoriteSlice
