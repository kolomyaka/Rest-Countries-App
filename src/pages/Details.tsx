import { skipToken } from "@reduxjs/toolkit/dist/query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { useSearchByCountryQuery } from "../redux";
import { IoArrowBack } from "react-icons/io5";
import { DetailsCard } from "../components/DetailsCard";
import styled from 'styled-components';

export type Currencies = {
  code: string
  name: string
  symbol: string
}

export type Languages = {
  name: string
}

export type TopLevelDomain = {
  el: string
}

type Country = {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string
  subregion: string
  currencies: Currencies[]
  languages: Languages[]
  topLevelDomain: TopLevelDomain[]
  borders: string[]
};


type Props = {};

export const Details = (props: Props) => {
  const { name } = useParams();
  const [country, setCountry] = useState<Country[]>();
  const { data } = useSearchByCountryQuery(name ? name : skipToken);

  useEffect(() => {
    setCountry(data);
  }, [data]);

  console.log(country);

  return (
    <div>
      <Button>
        <IoArrowBack /> Back
      </Button>
      {country && <DetailsCard name={country[0].name} 
      nativeName={country[0].nativeName} 
      flag={country[0].flag}
      capital={country[0].capital}
      population={country[0].population}
      region={country[0].region}
      subregion={country[0].subregion}
      currencies={country[0].currencies}
      languages={country[0].languages}
      borders={country[0].borders}
      topLevelDomain={country[0].topLevelDomain}
      />}
    </div>
  );
};
