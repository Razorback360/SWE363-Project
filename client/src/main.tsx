import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { FileRouter } from './FileRouter.tsx';
import Header from './components/Header.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <FileRouter />
    </BrowserRouter>
  </StrictMode>,
);
