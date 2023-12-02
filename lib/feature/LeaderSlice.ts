import HomeSlice from "./HomeSlice";

const LeaderSlice = HomeSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    singleLeader: builder.query({
      query: (email: string) => `/api/leader/${email}`,
      providesTags: ["Leader"],
    }),
    // createUser: builder.mutation({
    //   query: (data) => ({
    //     url: "api/v1/auth/register",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Teams"],
    // }),
    // deleteUser: builder.mutation({
    //   query: (id) => ({
    //     url: `api/v1/auth/${id}`,
    //     method: "DELETE",
    //     credentials: "include",
    //   }),
    //   invalidatesTags: ["Teams"],
    // }),
  }),
});
export const { useSingleLeaderQuery } = LeaderSlice;
export default LeaderSlice;
