import styled from 'styled-components'
import { Currencies, Languages, TopLevelDomain } from '../../pages/Details';


const ListItem = styled.li`

    & > b {
        font-weight: var(--fw-bold);
    }
`;

type Props = {
    currencies: Currencies[]
    languages: Languages[]
    topLevelDomain: TopLevelDomain[]
}



export const DetailsCardItemBot = ({currencies, languages, topLevelDomain}: Props) => {

    

    return (
        <>
            <ListItem>
                <b>Top Level Domain</b>{' '}
                {topLevelDomain.map((d) => (
                    // @ts-ignore
                    <span key={d}>{d}</span>
                ))}
            </ListItem>
            <ListItem>
                <b>Currency</b>{' '}
                {currencies.map((c) => (
                    <span key={c.code}>{c.name} </span>
                ))}
            </ListItem>
            <ListItem>
                <b>Top Level Domain</b>{' '}
                {languages.map((l) => (
                    <span key={l.name}>{l.name}</span>
                ))}
            </ListItem>
        </>
    )
}