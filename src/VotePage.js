
import axios from 'axios';

const VotePage = () => {
const GetRandomUser = async () => {
    const { data: users } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
  
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const userName = randomUser.name;
    console.log(userName);
}
  
    return (
      <div>
        <h2>Welcome </h2>
        <button onClick={GetRandomUser}>Draw Name</button>
        <h3>You are a secret sender for</h3>
        <p></p>
      </div>
    );
};
  
export default VotePage