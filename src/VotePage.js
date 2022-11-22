import axios from "axios";
import { useState } from "react";

const VotePage = () => {

  const [giftReceiver, setGiftReceiver] = useState('')

  const GetRandomUser = async () => {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const randomUser = users[Math.floor(Math.random() * users.length)];
    
    setGiftReceiver(randomUser.name)
    
    // const userName = Object.keys(randomUser).map((name) => randomUser[name])
    // console.log(users.map(({ name }) => name));
    // const newUsers = users.filter(item => item !== randomUser)
    //const [data, SetNewdata] = useState('')
    //SetNewdata(newUsers)
    
    //
    //if () `You are a secret sender for ...`
    //else get new request for remaining users
    //SetNewData()
  };



  return (
    <div>
      <h2>Welcome </h2>
      <button onClick={GetRandomUser}>Draw Name</button>
      <h3>You are a secret sender for</h3>
      <p>{giftReceiver}</p>
    </div>
  );
};

export default VotePage;
