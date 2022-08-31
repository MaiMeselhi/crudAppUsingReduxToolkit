import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: { items: [] },
    reducers: {
        addPost: function (state, action) {
            state.items.push(action.payload);
        },
        deletePost: function (state, action) {
            state.items = state.items.filter(
                (item) => item.id != action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
