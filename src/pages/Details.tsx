import { skipToken } from "@reduxjs/toolkit/dist/query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { useSearchByCountryQuery } from "../redux";
import { IoArrowBack } from 'react-icons/io5'


type Props = {};

export const Details = (props: Props) => {
  
  const { name } = useParams();
  const [country, setCountry] = useState()
  const { data } = useSearchByCountryQuery(name? name : skipToken)


  return <div>
  <Button>
    <IoArrowBack/> Back
  </Button>
  Details {name} 
  </div>;
};
