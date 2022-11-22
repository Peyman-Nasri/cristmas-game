import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import VotePage from "./VotePage";

function App() {
  return (
    <>
      <h1>Welcome to Soltia</h1>

      <Routes>
        <Route exact path="/" element={<StartGame />} />
        <Route path="/votepage" element={<VotePage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;

const StartGame = () => (
  <Link to={`/votepage`}>
    <button>Become a Secret Sender</button>
  </Link>
);
