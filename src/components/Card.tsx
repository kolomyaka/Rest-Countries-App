import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;


type Props = {
    img: string
    name: string
    info: Array<any>
    onClick: () => void
}

const Card = ({img, name, info = [], onClick}: Props) => {
  return (
    <Wrapper onClick={onClick}>
        <CardImage />
        <CardBody>
            <CardTitle>
                {name}
            </CardTitle>
            <CardList>
                {info.map((el) => {
                    <CardListItem key={el.title}>
                        <b>{el.title}:</b>{el.description}
                    </CardListItem>
                })}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}

export default Card