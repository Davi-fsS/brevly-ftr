import './index.css'
import { App } from './app'
import { BrowserRouter, Routes, Route } from 'react-router'
import ReactDOM from 'react-dom/client';
import { Redirecting } from './components/redirecting';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Redirecting/>}>
        <Route index element={<App />}/>
        <Route path="/not-found" element={<App />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
