import HomeSlice from "./HomeSlice";

const LeaderSlice = HomeSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    singleLeader: builder.query({
      query: (email: string) => `/api/leader/${email}`,
      providesTags: ["Leader"],
    }),
  }),
});
export const { useSingleLeaderQuery } = LeaderSlice;
export default LeaderSlice;
