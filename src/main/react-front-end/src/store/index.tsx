import { createSlice, configureStore } from '@reduxjs/toolkit';

type Termsheet = {
    id: number;
    type: string;
    sousType: string;
    precedentConditions: PrecedentCondition[]
}

type PrecedentCondition = {
    id: number,
    name: string
}

const initialTermsheet : Termsheet = {
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
            console.log(action) 
            state.termsheet = action.payload;
        },
        addPrecedentcondition(state) {
            const newPc : PrecedentCondition = {
                id: 1,
                name: ''
            };
            console.log(state.termsheet.precedentConditions)
            state.termsheet.precedentConditions = [...state.termsheet.precedentConditions, newPc];
        },
        removePrecedentCondition(state, action) {
            console.log(action)
            const index : number = action.payload;
            state.termsheet.precedentConditions.splice(index, 1);
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
