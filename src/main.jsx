import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </ThemeProvider>);
