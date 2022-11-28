import React, { useState } from 'react'
import VotePage from './VotePage'
import {
  ChristmasButton,
  Container,
  PageTitle,
  StartGameImage,
  Title,
} from './game_styles'
import christmassButton from '../../assets/images/christmassButton.webp'
import Snow from 'react-snowfall'
import useSound from 'use-sound'
import jingleBells from '../../assets/sounds/Jingle Bells.mp3'

const Game = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [playSound, { stop }] = useSound(jingleBells, { volume: 0.7 })

  return (
    <>
      <Container>
        {!hasGameStarted ? (
          <>
            <PageTitle color="#ffd447">Welcome to Soltia</PageTitle>

            <ChristmasButton
              onClick={() => {
                // playSound()
                setHasGameStarted(true)
              }}
            >
              <Title>Become a secret sender</Title>
              <StartGameImage src={christmassButton} />
            </ChristmasButton>
          </>
        ) : (
          <VotePage />
        )}
      </Container>

      <Snow
        snowflakeCount={600}
        radius={[0.5, 3.5]}
        speed={[2, 8]}
        wind={[1.5, 5.5]}
      />
    </>
  )
}

export default Game
