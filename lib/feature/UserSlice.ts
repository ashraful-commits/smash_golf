import HomeSlice from "./HomeSlice";

const userApiSlice = HomeSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    singleUser: builder.query({
      query: (email: string) => `/api/user/${email}`,
      providesTags: ["User"],
    }),

    userRegister: builder.mutation({
      query: (data: any) => ({
        url: "/api/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
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
export const { useSingleUserQuery, useUserRegisterMutation } = userApiSlice;
export default userApiSlice;
