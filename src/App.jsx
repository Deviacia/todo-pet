import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Planner from './pages/Planner';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Planner />} />
    </Routes>
  )
};

export default App;