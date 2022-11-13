import { BrowserRouter } from 'react-router-dom';
import { Router } from '../services'
import './App.css';

export function App() {
  const root = process.env.REACT_APP_ROOT
  return (
    <main>
      <BrowserRouter basename={root}>
        <Router />
      </BrowserRouter>
    </main>
  );
}

export default App
