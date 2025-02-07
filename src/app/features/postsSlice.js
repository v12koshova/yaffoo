import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  errors: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(
    "https://679c91fc87618946e6529a2b.mockapi.io/posts"
  );
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (action.payload === "Not found") {
          state.status = "reject";
        } else {
          state.status = "success";
          state.posts = action.payload;
        }
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "reject";
      });
  },
});

export default postsSlice.reducer;
