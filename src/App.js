import PokeCard from './components/PokeCard';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div id='container'>
                <Routes>
                    <Route path="/" element={<PokeCard />}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
