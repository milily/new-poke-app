import PokeCard from './components/PokeCard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<PokeCard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
