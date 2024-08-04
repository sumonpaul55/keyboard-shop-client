import { baseApi } from "../../api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/order",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
