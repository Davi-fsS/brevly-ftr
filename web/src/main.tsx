import './index.css'
import { App } from './app'
import { BrowserRouter, Routes, Route } from 'react-router'
import ReactDOM from 'react-dom/client';
import { Redirecting } from './components/redirecting';
import { LinkNotFound } from './components/link-not-found';
import { LinkProvider } from './providers/link-provider';
import { ToastContainer } from 'react-toastify';
import { LinkSite } from './components/link-site';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <LinkProvider>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/not-found" element={<LinkNotFound />}/>
        <Route path='/redirecting' element={<Redirecting />}/>
        <Route path='/redirecting/:id' element={<LinkSite />}/>
      </Routes>
    </LinkProvider>
    <ToastContainer />
  </BrowserRouter>
);
