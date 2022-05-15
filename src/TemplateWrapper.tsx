import React, { StrictMode, FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './Redux/App/store';

interface ITemplateWrapperProps {
  children: ReactNode
}

export const TemplateWrapper: FC<ITemplateWrapperProps> = ({ children }) => (
  <StrictMode>
    <Provider store={store}>
      <Router>
        { children }
      </Router>
    </Provider>
  </StrictMode>
);

export default TemplateWrapper;
