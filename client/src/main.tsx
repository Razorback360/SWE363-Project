import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header.tsx"
import { FileRouter } from './FileRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <FileRouter />
    </BrowserRouter>
  </StrictMode>,
);
