import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      // или просто return action.payload ?
      state.filter = action.payload;
      // return action.payload;
    },
  },
});

// ниже reducers или может непонятно почему reducer (как в конспекте)
export const filterReducer = filterSlice.reducer;
export const setFilterValue = filterSlice.actions;

// const updateFilterInState = value => {
//   // setFilter(value);
// };
