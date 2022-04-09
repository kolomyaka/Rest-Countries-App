import React from 'react'
import styled from 'styled-components';
import { Container } from './Container';



const Wrapper = styled.main`
    padding: 2rem 0;
    @madia(min-width: 767px) {
        padding: 4rem 0;
    }
`;


type Props = {
    children: any
}

export default function Main({children}: Props) {
  return (
    <Wrapper>
        <Container>
            {children}
        </Container>
    </Wrapper>
  )
}