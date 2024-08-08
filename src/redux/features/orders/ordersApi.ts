import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../Types";

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
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
