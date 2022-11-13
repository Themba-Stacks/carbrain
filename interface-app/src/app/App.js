import { BrowserRouter } from 'react-router-dom';
import {Router} from '../services'
import './App.css';

function App() {
  const root = process.env.REACT_APP_ROOT
  return (
    <main className="App">
      <BrowserRouter basename={root}>
        <Router />
      </BrowserRouter>
    </main>
  );
}

export default App;
