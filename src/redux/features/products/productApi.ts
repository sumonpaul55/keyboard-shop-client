import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
    }),
    // get all products
    getAllProduct: builder.query({
      query: ({ search, category, limit }: { search?: string; category?: string; limit?: number }) => {
        const query = new URLSearchParams();

        if (category) {
          query.append("category", category);
        }
        if (limit) {
          query.append("limit", limit.toString());
        }
        if (search) {
          query.append("search", search);
        }
        return {
          url: "/products",
          method: "GET",
          params: query,
        };
      },
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductQuery } = productApi;
