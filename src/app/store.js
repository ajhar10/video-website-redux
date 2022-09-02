import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videoSlice";
import tagsReducer from "../features/tags/tagSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideosSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideo: relatedVideoReducer,
    filter: filterReducer,
  },
});
