import HomeSlice from "./HomeSlice";

const NewsSlice = HomeSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllNewsFeed: builder.query({
      query: () => '/api/user/newsfeed',
      providesTags: ["News"],
    }),
    getSingleNews: builder.query({
      query: (id:string) => `/api/user/newsfeed/${id}`,
      providesTags: ["News"],
    }),
    
  }),
});
export const { useGetAllNewsFeedQuery,useGetSingleNewsQuery} = NewsSlice;
export default NewsSlice;
