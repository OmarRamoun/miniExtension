import React, { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Loader from './components/Loader';

// styles
import { mainStyles } from './Styles/index.styles';

const Login = lazy(() => import('./Pages/Login'));
const Profile = lazy(() => import('./Pages/Profile'));

const App: FC = () => (
  <main className={mainStyles}>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={(
            <Login />
          )}
        />
        <Route
          path="profile"
          element={(
            <Profile />
          )}
        />
        <Route
          path="*"
          element={(
            <Login />
          )}
        />
      </Routes>
    </Suspense>
  </main>
);

export default App;
