import './index.css'
import { App } from './app'
import { BrowserRouter, Routes, Route } from 'react-router'
import ReactDOM from 'react-dom/client';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/link"/>
      <Route path="/url/not-found" element={<App />}/>
    </Routes>
  </BrowserRouter>
);
