import styled from "styled-components";

const ListItem = styled.li`
    padding: 5px;
    & > b {
        font-weight: var(--fw-bold);
    }
`;

type Props = {
  nativeName: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
};

export const DetailsCardItemTop = ({
  nativeName,
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
