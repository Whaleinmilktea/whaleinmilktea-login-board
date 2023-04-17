import './App.css';
import Board from './Page/Board';
import LoginPage from './Page/LoginPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <nav>
      <ul>
      <button>
      <Link to="/board">Board</Link>
      </button>
      <button>
      <Link to="/login">Login</Link>
      </button>
      </ul>
    </nav>

    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </>
  );
}

export default App;
