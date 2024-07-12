import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateProductMutation } = productApi;
