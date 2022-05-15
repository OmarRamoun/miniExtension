import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import TemplateWrapper from './TemplateWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <TemplateWrapper>
    <App />
  </TemplateWrapper>,
);
