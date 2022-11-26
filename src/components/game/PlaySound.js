import useSound from 'use-sound'
import JingleBells from '../../assets/sounds/Jingle Bells.mp3'

const PlaySound = () => {
  const [playSound] = useSound(JingleBells, { volume: 0.7 }) // 70% of the original volume

  const handleClick = () => {
    playSound()
    // maybe you want to add other things here?
  }

  return <button onClick={() => handleClick()}>Play Sound</button>
}


export default PlaySound
