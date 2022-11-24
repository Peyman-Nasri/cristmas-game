import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75%;
  margin: auto;
  height: 100vh;
  /* background-color: ${({ color }) => color}; */
`

export const PageTitle = styled.h1`
  color: ${({ color }) => color};
  font-size: 3em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 16px;
  padding: 20px
`

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
  color: #e19c47;
  cursor: pointer;
`

export const VotePageImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  color: #e19c47
`

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 50px;
  padding: 22px 33px;
  font-family: 'Lobster', cursive;
  font-size: 16px;
  line-height: 0.3px;
  text-decoration: none;
  color: #e19c47;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
  background: #8e1d0c;
  outline: none;
  border-radius: 15px;
  border: 1px solid #4c0300;
  box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.25),
    /* highlight */ inset 0 0 6px #a23227,
    /* inner glow */ inset 0 80px 80px -40px #ac3223,
    /* gradient */ 1px 1px 3px rgba(0, 0, 0, 0.75); /* shadow */
  position: relative;
  overflow: visible; /* IE9 & 10 */
  -webkit-transition: 500ms linear;
  -moz-transition: 500ms linear;
  -o-transition: 500ms linear;
  transition: 500ms linear;
  &:hover {
    background: #a61715;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 40px #fff;
    box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.25),
      /* highlight */ inset 0 0 6px #da3b2c,
      /* inner glow */ inset 0 80px 80px -40px #dd4330,
      /* gradient */ 1px 1px 3px rgba(0, 0, 0, 0.75); /* shadow */
  }
  &:active {
    box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.25),
      /* highlight */ inset 0 0 6px #da3b2c,
      /* inner glow */ inset 0 80px 80px -40px #dd4330,
      /* gradient */ 0px 1px 0px rgba(255, 255, 255, 0.25); /* shadow */

    -webkit-transition: 50ms linear;
    -moz-transition: 50ms linear;
    -o-transition: 50ms linear;
    transition: 50ms linear;
  }
`

export const Name = styled.h2`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 15px;
  background-color: #9e1d0c;
  color: #e19c47;
  padding: 10px;
`
