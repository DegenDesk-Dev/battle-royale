import React from 'react'
import styled from 'styled-components'

import logo from '../assets/images/logo512.png'

export default function Root() {
  return (
    <Container>
      <h6>Accueil</h6>
      <p>Ceci est la page d'accueil.</p>
      <img alt="" src={logo} />
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  width: 100%;

  & > h6 {
    font-size: 48px;
  }

  & > p {
    font-size: 24px;
  }

  & > img {
    height: 72px;
    width: auto;
  }
`
