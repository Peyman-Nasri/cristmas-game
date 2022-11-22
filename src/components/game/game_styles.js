import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75%;
  margin: auto;
  height: 100vh;
  background-color: ${({color}) => color};
`

export const PageTitle = styled.h1`
  color: ${({color}) => color};
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

export const StartGameButton = styled.img`
  width: 25em;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`