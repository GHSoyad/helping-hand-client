import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';
import { CategoryInterface } from '@/types/globalTypes';

// Define the initial state using that type
const initialState: { categories: CategoryInterface[] } = {
  categories: []
};

export const categorySlice = createSlice({
  name: 'categories',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getCategories: (state, action: PayloadAction<CategoryInterface[]>) => {
      state.categories = [...action.payload];
    },
  },
})

export const { getCategories } = categorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = (state: RootState) => state.categories;

export default categorySlice.reducer;