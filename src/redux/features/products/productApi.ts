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
      query: (params) => {
        const query = new URLSearchParams();
        if (params?.limit) {
          query.append("limit", params?.limit);
        }
        if (params?.search) {
          query.append("search", params?.search);
        }
        if (params?.page) {
          query.append("page", params?.page);
        }
        if (params?.brand) {
          query.append("brand", params?.brand);
        }
        return {
          url: "/products",
          method: "GET",
          params: query,
        };
      },
    }),

    getProductField: builder.query({
      query: (params) => {
        let query = new URLSearchParams();
        if (params.fields) {
          query.append("fields", params.fields);
        }
        return {
          url: "/products",
          method: "GET",
          params: query,
        };
      },
    }),

    getProductById: builder.query({
      query: (id) => {
        const query = new URLSearchParams();
        if (id) {
          query.append("id", id);
        }
        return {
          url: `/products/getOneProductById`,
          method: "GET",
          params: id,
        };
      },
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductQuery, useGetProductFieldQuery, useGetProductByIdQuery } = productApi;
