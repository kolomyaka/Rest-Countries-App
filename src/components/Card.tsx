import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
    border-radius: var(--brs);
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`;

const CardBody = styled.div``;

const CardTitle = styled.h3`
    padding: 1rem 0 0 1rem;
`;

const CardList = styled.ul`
    padding: 0 1rem 1rem 1rem;
`;

const CardListItem = styled.li``;


type Props = {
    img: string
    name: string
    info: Array<any>
}

const Card = ({img, name, info = []}: Props) => {
    

  return (
    <Wrapper >
        <CardImage src={img}/>
        <CardBody>
            <CardTitle>
                {name}
            </CardTitle>
            <CardList>
                {info.map((el) => (
                    <CardListItem key={el.title}>
                        <b>{el.title}:</b> {el.description}
                    </CardListItem>
                ))}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}

export default Card