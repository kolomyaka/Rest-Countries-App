import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/'}),
    endpoints: (build) => ({
        getCountries: build.query({
            query: () => 'all',
        })
    })
});

export const { useGetCountriesQuery } = countriesApi;