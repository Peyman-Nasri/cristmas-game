import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75%;
  margin: auto;
  height: 100vh;
  background-color: ${({ color }) => color};
`

export const PageTitle = styled.h1`
  color: ${({ color }) => color};
  font-size: 3em;
`

// export const GetRandomUserButton = styled.div`
//   background-color: #ff4400;
//   color: white;
//   border-radius: 10px;
//   border: 2px solid yellow;
//   padding: 1em;
//   cursor: pointer;
// `

export const StartGameImage = styled.img`
  width: 25em;
  cursor: pointer;
`

export const CristmasButton = styled.div`
  position: relative;
  text-align: center;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: yellow;
`
