import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './features/category/categorySlice';
import { categoryApi } from './features/category/categoryApi';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch