import React, { useState } from 'react'
import VotePage from './VotePage'
import { ChristmasButton, Container, PageTitle, StartGameImage, Title } from './game_styles'
import christmassButton from '../../assets/images/christmassButton.webp'
import Snow from 'react-snowfall'
import PlaySound from './PlaySound'

const Game = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)

  return (
    <>
      <PlaySound />
      <Container>
        <PageTitle color="#e19c47">Welcome to Soltia</PageTitle>
        {!hasGameStarted ? (
          <ChristmasButton>
            <Title>Become a secret sender</Title>
            <StartGameImage
            src={christmassButton}
            onClick={() => setHasGameStarted(true)}
            />
          </ChristmasButton>
        ) : (
          <VotePage />
        )}
      </Container>

      <Snow />
    </>
  )
}

export default Game
