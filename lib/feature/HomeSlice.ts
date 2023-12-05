import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const HomeSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://smash-golf.vercel.app/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

export default HomeSlice;
