import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from './pages/Error'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path="/404" element={<Error/>}/>
    </Routes>
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
