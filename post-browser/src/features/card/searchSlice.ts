import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Search = {
    search: number | string;
};

const initialState: Search = {
    search: "",
};
export const searchSlice = createSlice({
    name: "cardSlice",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<number | string>) {
            console.log(action.payload);
            state.search = action.payload;
        },
    },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
