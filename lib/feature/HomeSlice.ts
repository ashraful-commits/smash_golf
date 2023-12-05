import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const HomeSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

export default HomeSlice;
