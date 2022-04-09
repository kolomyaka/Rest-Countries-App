import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";
import { useGetCountriesQuery } from "../redux";

type Props = {};

export const HomePage = (props: Props) => {

    const { data = [] } = useGetCountriesQuery("");
    const navigate = useNavigate();
    const [filteredCountries, setFilteredCountries] = useState(data);

    const handleSearch = (search: string, region: string) => {
        let countries = [...data];

        if (region) {
            countries = countries.filter(c => c.region.includes(region))
        }

        if (search) {
            countries = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(countries);
    }


    return (
        <>
        <Controls onSearch={handleSearch} />
        <List>
            {data.map((el) => {
            let info = [
                {
                title: "Population",
                description: el.population.toLocaleString(),
                },
                {
                title: "Region",
                description: el.region,
                },
                {
                title: "Capital",
                description: el.capital,
                },
            ];
            return (
                <Card
                key={el.name}
                img={el.flags.png}
                name={el.name}
                info={info}
                onClick={() => navigate(`/country/${el.name}`)}
                />
            );
            })}
        </List>
        </>
    );
};
