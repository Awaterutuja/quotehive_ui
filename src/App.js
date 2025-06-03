
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/router';

import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
