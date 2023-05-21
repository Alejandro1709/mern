import { apiSlice } from './apiSlice';

const USERS_URL = '/api/v1/users';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: `${USERS_URL}/me`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMeQuery } = usersApiSlice;
