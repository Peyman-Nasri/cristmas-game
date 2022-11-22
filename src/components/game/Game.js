import React, { useState } from 'react'
import VotePage from './VotePage'
import { Container, PageTitle, StartGameButton } from './game_styles'

const Game = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)

  return (
    <>
      <Container color="red">
        <PageTitle color="white">Welcome to Soltia</PageTitle>
        {!hasGameStarted ? (
          <StartGameButton onClick={() => setHasGameStarted(true)}>
            Become a Secret Sender
          </StartGameButton>
        ) : (
          <VotePage />
        )}
      </Container>
    </>
  )
}

export default Game
