import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Name, VotePageImage } from './game_styles'


const VotePage = () => {
  const [giftReceiver, setGiftReceiver] = useState('')
  const [userName, setUserName] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    const getUserName = async () => {
      const { data: users } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      const user = users[Math.floor(Math.random() * users.length)]

      setUserName(user.name)
    }

    getUserName()
  }, [])

  const getRandomUser = async () => {
    const { data: users } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    const randomUser = users[Math.floor(Math.random() * users.length)]

    setGiftReceiver(randomUser.name)
    setIsDisabled(true)
  }

  return (
    <VotePageImage>
      <Name>
        Welcome{' '}
        <strong>
          <i>{userName}</i>
        </strong>
      </Name>
      <h3>You are a secret sender for</h3>ّ
      <Button onClick={getRandomUser} hidden={isDisabled}>
        Draw Name
      </Button>
      <h3>{giftReceiver}</h3>
    </VotePageImage>
  )
}

export default VotePage
