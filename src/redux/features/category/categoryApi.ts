// Need to use the React-specific entry point to allow generating React hooks
import { CategoryInterface } from '@/types/globalTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}` }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryInterface[], void>({
      query: () => `categories`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = categoryApi;