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
  /**************************************
   ******** State
   *************************************/
  const [giftReceiver, setGiftReceiver] = useState('')
  const [userName, setUserName] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [loading, setloading] = useState(false)

  /**************************************
   ******** Mount
   *************************************/
  useEffect(() => {
    getUserName()
  }, [])

  /**************************************
   ******** Get a random user other than yourself
   *************************************/
  const getUserName = async () => {
    const { data: users } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    const user = users[Math.floor(Math.random() * users.length)]
    setUserName(user)
  }

  /**************************************
   ******** Get gift receiver
   *************************************/
  const getGiftReceiver = async () => {
    setloading(true)
    setIsDisabled(true)

    const { data: users } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    const otherUsers = users.filter(user => user.id !== userName.id)
    const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)]

    setGiftReceiver(randomUser.name)
    setloading(false)
  }

  return (
    <VotePageImage>
      <Name>
        Welcome
        <strong>
          <i>{userName.name}!</i>
        </strong>
      </Name>

      <h3>
        You are a secret sender for
        {isDisabled ? (
          <ChristmasGift>
            {loading ? (
              <GiftReceiver>Just a moment ...</GiftReceiver>
            ) : (
              <GiftReceiver>{giftReceiver}</GiftReceiver>
            )}

            <GiftImage src={gift} />
          </ChristmasGift>
        ) : (
          <span>...</span>
        )}
      </h3>

      {!isDisabled && <Button onClick={getGiftReceiver}>Draw Name</Button>}
    </VotePageImage>
  )
}

export default VotePage
