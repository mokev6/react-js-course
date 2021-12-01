import { configureStore } from "@reduxjs/toolkit";
import compteurSlice from "./compteur-slice";

const store = configureStore({
    reducer: {compteur: compteurSlice.reducer}
});

export default store;