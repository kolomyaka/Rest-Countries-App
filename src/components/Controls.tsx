import React from "react";
import { useState, useEffect } from "react";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from 'styled-components';

type Props = {
  onSearch: (search: string, region: string) => any
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;


const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Controls = ({onSearch}: Props) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState(null);

  useEffect(() => {
    console.log(region?.value);
    
    onSearch(search, 'Africa');
  }, [search, region])
  

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        // @ts-ignore
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
