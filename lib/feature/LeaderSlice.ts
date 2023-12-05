import HomeSlice from "./HomeSlice";

const LeaderSlice = HomeSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    singleLeader: builder.query({
      query: () => '/api/leader',
      providesTags: ["Leader"],
    }),
  }),
});
export const { useSingleLeaderQuery } = LeaderSlice;
export default LeaderSlice;
