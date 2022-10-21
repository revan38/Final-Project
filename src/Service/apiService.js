import{ createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"; 
export const servicesApi = createApi({
    reducerPath: "products", 
    baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3001"}),
    endpoints: (builder) => ({
            getProducts: builder.query({
                query: () => ({
                    url: '/products'
                })
        })
    })
    });
