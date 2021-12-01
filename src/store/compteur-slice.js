import { createSlice } from '@reduxjs/toolkit';

const compteurSlice = createSlice({
    name:'compteur',
    initialState : {compteur : 0},
    reducers: {
        increment(state) {
            state.compteur = state.compteur + 1;
        },
        decrement(state) {
            state.compteur = state.compteur - 1;
        },
        reset(state, action) {
            state.compteur = action.payload
        }
    }
});

export const CompteurAction = compteurSlice.actions;
export default compteurSlice;