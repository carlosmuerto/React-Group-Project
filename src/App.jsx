import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Header from './view/components/Header/header';
import RocketsPage from './view/pages/Rockets/Rockets';
import ProfilePage from './view/pages/Profile/Profile';
import MissionsPage from './view/pages/Missions/Missions';

const links = [
  {
    path: '/',
    text: 'Rockets',
    element: (<RocketsPage />),
  },
  {
    path: '/Missions',
    text: 'Missions',
    element: (<MissionsPage />),
  },
  {
    path: '/Profile',
    text: 'Profile',
    element: (<ProfilePage />),
  },
];
const App = () => (
  <div className="app">
    <Router>
      <Header links={links} />
      <Routes>
        {links.map((link) => (
          <Route
            key={`RouteTo:${link.text}`}
            path={link.path}
            element={link.element}
          />
        ))}
      </Routes>
    </Router>
  </div>
);

export default App;
