import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.foreverbuy.in/api/product',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => '/list',
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductQuery } = api;
