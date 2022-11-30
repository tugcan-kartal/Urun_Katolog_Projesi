import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignInAndUpPage from './components/SignInAndUpPage';

function App() {
  return (
    <Router>
      
      <div className="App">
        
        <Routes>

          <Route path='/' exact element={<SignInAndUpPage />} />

        </Routes>  
      
      </div>

    </Router>
      
  );
}

export default App;
