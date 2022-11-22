import axios from 'axios'
import { useEffect, useState } from 'react'

const VotePage = () => {
  const [giftReceiver, setGiftReceiver] = useState('')
  const [userName, setUserName] = useState('')

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
  }

  return (
    <div>
      <h2>Welcome {userName}</h2>
      <button onClick={getRandomUser}>Draw Name</button>
      <h3>You are a secret sender for</h3>
      <p>{giftReceiver}</p>
    </div>
  )
}

export default VotePage
