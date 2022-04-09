import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Country } from '../Models/Country';

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/'}),
    endpoints: (build) => ({
        getCountries: build.query<Country[], string>({
            query: () => 'all?fields=name,capital,flags,population,region,capital',
        })
    })
});

export const { useGetCountriesQuery } = countriesApi;