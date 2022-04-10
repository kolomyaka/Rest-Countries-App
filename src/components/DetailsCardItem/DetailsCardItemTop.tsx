import styled from "styled-components";

const ListItem = styled.li``;

type Props = {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
};

export const DetailsCardItemTop = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
}: Props) => {
  return (
    <>
      <ListItem>
        <b>Native Name: </b>
        {nativeName}
      </ListItem>
      <ListItem>
        <b>Population:</b>
        {population}
      </ListItem>
      <ListItem>
        <b>Region:</b>
        {region}
      </ListItem>
      <ListItem>
        <b>Sub Region</b> {subregion}
      </ListItem>
      <ListItem>
        <b>Capital:</b> {capital}
      </ListItem>
    </>
  );
};
