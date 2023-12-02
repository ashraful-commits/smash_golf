import HomeSlice from "./HomeSlice";

const GameSlice = HomeSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllGame: builder.query({
      query: () => "/api/user/game",
      providesTags: ["Game"],
    }),
    getSingleGame: builder.query({
      query: (id: string) => `/api/user/game/${id}`,
      providesTags: ["Game"],
    }),
  }),
});
export const { useGetAllGameQuery, useGetSingleGameQuery } = GameSlice;
export default GameSlice;
