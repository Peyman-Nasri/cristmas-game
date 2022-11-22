import React, { useState } from 'react'
import VotePage from './VotePage'
import { Container, PageTitle, StartGameButton } from './game_styles'
import cristmassButton from '../../assets/images/cristmassButton.webp'

const Game = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)

  return (
    <>
      <Container color="red">
        <PageTitle color="white">Welcome to Soltia</PageTitle>
        {!hasGameStarted ? (
          // <StartGameButton onClick={() => setHasGameStarted(true)}>
          //   Become a Secret Sender
          // </StartGameButton>
          <StartGameButton
            src={cristmassButton}
            onClick={() => setHasGameStarted(true)}
          />
        ) : (
          <VotePage />
        )}
      </Container>
    </>
  )
}

export default Game
