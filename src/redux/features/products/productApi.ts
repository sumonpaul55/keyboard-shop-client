import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../Types";

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
      invalidatesTags: [tagTypes.products],
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
        if (params?.brand && params?.brand.length > 0) {
          query.append("brand", params?.brand);
        }
        if (params?.range) {
          query.append("range", params?.range);
        }
        return {
          url: "/products",
          method: "GET",
          params: query,
        };
      },
      providesTags: [tagTypes.products],
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
      providesTags: [tagTypes.products],
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
      providesTags: [tagTypes.products],
    }),
    editProduct: builder.mutation({
      query: (productInfo) => {
        return {
          url: "/products/edit-product",
          method: "PUT",
          body: productInfo,
        };
      },
      invalidatesTags: [tagTypes.products],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        // const params = new URLSearchParams();
        // if (id) {
        //   params.append("id", id);
        // }
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetProductFieldQuery,
  useGetProductByIdQuery,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
