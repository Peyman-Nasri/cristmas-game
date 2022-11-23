import React, { useState } from 'react'
import VotePage from './VotePage'
import { Container, CristmasButton, PageTitle, StartGameImage, Title } from './game_styles'
import cristmassButton from '../../assets/images/cristmassButton.webp'
import Snow from 'react-snowfall'

const Game = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)

  return (
    <>
      <Container color="red">
        <PageTitle color="white">Welcome to Soltia</PageTitle>
        {!hasGameStarted ? (
          <CristmasButton>
            <Title>Become a Secret Sender</Title>
            <StartGameImage
            src={cristmassButton}
            onClick={() => setHasGameStarted(true)}
            />
          </CristmasButton>
        ) : (
          <VotePage />
        )}
      </Container>

      <Snow />
    </>
  )
}

export default Game
