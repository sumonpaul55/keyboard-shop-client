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
        const params = new URLSearchParams();
        if (category) {
          params.append("category", category);
        }
        if (limit) {
          params.append("limit", limit.toString());
        }
        if (search) {
          params.append("search", search);
        }

        return {
          url: "/products",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductQuery } = productApi;
