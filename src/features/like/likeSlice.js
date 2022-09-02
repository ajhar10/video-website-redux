import { getVideo } from "./likeApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchLike = createAsyncThunk("like/fetchLike", async (id) => {
  const video = await getVideo(id);

  return video;
});

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeCLicked: (state, action) => {
      state.video.like++;
    },
  },
});

export default likeSlice.reducer;
export const { likeCLicked } = likeSlice.actions;
