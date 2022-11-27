import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Button,
  ChristmasGift,
  GiftImage,
  GiftReceiver,
  Name,
  VotePageImage,
} from './game_styles'
import gift from '../../assets/images/gift.jpg'

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
          <i>{userName}!</i>
        </strong>
      </Name>

      <h3>
        You are a secret sender for{' '}
        {isDisabled ? (
          <ChristmasGift>
            <GiftReceiver>{giftReceiver}</GiftReceiver>
            <GiftImage src={gift} />
          </ChristmasGift>
        ) : (
          <>...</>
        )}
      </h3>

      {!isDisabled && <Button onClick={getRandomUser}>Draw Name</Button>}

    </VotePageImage>
  )
}

export default VotePage
