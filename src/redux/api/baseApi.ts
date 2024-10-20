// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../Types";
// import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),p
  baseQuery: fetchBaseQuery({ baseUrl: "https://mechanical-keyboard-shop-server-xi.vercel.app/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

// Export hooks for usage in functional components, which are

// auto-generated based on the defined endpoints
