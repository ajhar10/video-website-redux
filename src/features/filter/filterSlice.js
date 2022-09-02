const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  page: 1,
  author: "",
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    tagReseted: (state, action) => {
      state.tags = [];
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    searchReseted: (state, action) => {
      state.search = "";
    },
    pageSelected: (state, action) => {
      state.page = action.payload;
    },
    pageReseted: (state, action) => {
      state.page = 1;
    },
    authorSelected: (state, action) => {
      state.author = action.payload;
    },
    authorReseted: (state, action) => {
      state.author = "";
    },
    allFilterReseted: (state, action) => {
      state.tags = [];
      state.search = "";
      state.page = 1;
      state.author = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  pageSelected,
  authorSelected,
  tagReseted,
  searchReseted,
  pageReseted,
  authorReseted,
  allFilterReseted,
} = filterSlice.actions;
