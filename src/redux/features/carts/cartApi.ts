// import { baseApi } from "../../api/baseApi";

// export const cartApi = baseApi.injectEndpoints({
//   endpoints: (_builder) => ({
//     // add to cart api
//     // addToCart: builder.mutation({
//     //   query: (data) => {
//     //     return {
//     //       url: "/cart",
//     //       method: "POST",
//     //       body: data,
//     //     };
//     //   },
//     //   invalidatesTags: [tagTypes.cart],
//     // }),
//     // getAllCarts: builder.query({
//     //   query: () => {
//     //     return {
//     //       url: "/cart",
//     //       method: "GET",
//     //     };
//     //   },
//     //   providesTags: [tagTypes.cart],
//     // }),
//     // getTotalCart: builder.query({
//     //   query: () => {
//     //     return {
//     //       url: "/cart/total",
//     //       method: "GET",
//     //     };
//     //   },
//     //   providesTags: [tagTypes.cart],
//     // }),
//   }),
// });

// export const { useAddToCartMutation, useGetAllCartsQuery, useGetTotalCartQuery } = cartApi;
