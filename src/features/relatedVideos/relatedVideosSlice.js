import { getRelatedVideos } from "./relatedVideosApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });

    return relatedVideos;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
