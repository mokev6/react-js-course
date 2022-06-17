import { createSlice, configureStore } from '@reduxjs/toolkit';
import { PrecedentConditionType } from '../model/PrecedentConditionType';
import { TermsheetType } from '../model/TermsheetType';

const initialTermsheet : TermsheetType = {
    id: 1,
    type: '',
    sousType: '',
    precedentConditions: []
}

const termsheetSlice = createSlice({
    name: 'termsheet',
    initialState: { termsheet : initialTermsheet},
    reducers: {
        update(state, action) {
            state.termsheet = action.payload;
        },
        addPrecedentcondition(state) {
            const newPc : PrecedentConditionType = {
                id: 1,
                name: ''
            };
            state.termsheet.precedentConditions = [...state.termsheet.precedentConditions, newPc];
        },
        removePrecedentCondition(state, action) {
            const index : number = action.payload;
            state.termsheet.precedentConditions.splice(index, 1);
        },
        updatePrecedentCondition(state, action) {
            state.termsheet.precedentConditions[action.payload.idx] = action.payload.pc;
        }
    }
})


const store = configureStore({
    reducer: termsheetSlice.reducer,
    devTools: true
});

export const termsheetAction = termsheetSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
