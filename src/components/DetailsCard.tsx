import styled from 'styled-components'



const Wrapper = styled.section`
    
`;

const CardImage = styled.img``;

const CardTitle = styled.h1``

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

type Props = {
    name: string
    nativeName: string
    flag: string
    capital: string
    population: number
    
}

export const DetailsCard = ({name, nativeName, flag, capital, population}: Props) => {
    return (
        <Wrapper>
            <CardImage src={flag}/>

            <div>
                <CardTitle>
                    {name}
                </CardTitle>
                <ListGroup>
                    <List>
                        
                    </List>
                    <List>

                    </List>
                </ListGroup>
            </div>
        </Wrapper>
    )
}