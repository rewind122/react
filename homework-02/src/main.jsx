import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppPage from '@/pages/AppPage';

const domNode = document.getElementById('react-app');
createRoot(domNode).render(
  <StrictMode>
    <AppPage />
  </StrictMode>
)