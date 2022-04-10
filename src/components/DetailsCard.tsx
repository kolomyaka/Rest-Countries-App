import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Currencies, Languages, TopLevelDomain } from "../pages/Details";
import { useSearchByCodesQuery } from "../redux";
import { DetailsCardItemBot } from "./DetailsCardItem/DetailsCardItemBot";
import { DetailsCardItemTop } from "./DetailsCardItem/DetailsCardItemTop";

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items:center;
        gap: 5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const CardTitle = styled.h1`
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction:column;
    gap: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`

`;




const Meta = styled.div`
   margin-top: 3rem;
   display: flex;
   gap: 1.5rem;
   flex-direction:column;
   align-items: flex-start;

   @media (min-width: 767px) {
       flex-direction: row;
       align-items:center;
   }

   & > b {
       font-weight: var(--fw-bold);
   }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5rem;
    cursor: pointer;
`;


type Props = {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  currencies: Currencies[];
  languages: Languages[];
  topLevelDomain: TopLevelDomain[];
  borders: string[]
};

export const DetailsCard = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  currencies,
  languages,
  topLevelDomain,
  borders,
}: Props) => {
  console.log(borders);
    const [neighbours, setNeighbours] = useState<string[]>([]);
    const { data } = useSearchByCodesQuery(neighbours.length ? neighbours : skipToken)

    useEffect(() => {
        setNeighbours(borders)
    }, [borders])

    console.log(data);
    
  return (
    <Wrapper>
      <CardImage src={flag} />

      <div>
        <CardTitle>{name}</CardTitle>
        <ListGroup>
          <List>
            <DetailsCardItemTop
              nativeName={nativeName}
              population={population}
              region={region}
              capital={capital}
              subregion={subregion}
            />
          </List>
          <List>
              <DetailsCardItemBot 
              currencies={currencies}
              languages={languages}
              topLevelDomain={topLevelDomain}
            />
          </List>
        </ListGroup>
        <Meta>
            <b>Border Countries</b>
            {!borders.length ? (
                <span>There is no border countries</span>
            ) : (
                <TagGroup>
                    {borders.map(b => (<Tag key={b}>{b}</Tag>))}
                </TagGroup>
            )}
        </Meta>
      </div>
    </Wrapper>
  );
};
