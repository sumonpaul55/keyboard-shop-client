import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../Types";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add to cart api
    addToCart: builder.mutation({
      query: (data) => {
        return {
          url: "/cart",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.cart],
    }),
    getAllCarts: builder.query({
      query: () => {
        return {
          url: "/cart",
          method: "GET",
        };
      },
      providesTags: [tagTypes.cart],
    }),
    getTotalCart: builder.query({
      query: () => {
        return {
          url: "/cart/total",
          method: "GET",
        };
      },
      providesTags: [tagTypes.cart],
    }),

    deletCartProduct: builder.query({
      query: (id) => {
        const params = new URLSearchParams();
        if (id) {
          params.append("id", id);
        }
        return {
          url: "/cart",
          method: "DELETE",
          params: params,
        };
      },
    }),
  }),
});

export const { useAddToCartMutation, useGetAllCartsQuery, useGetTotalCartQuery } = cartApi;
