import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPages';

function App(): JSX.Element {
  return (
      <Routes >
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/weather" element={<WeatherPage />} /> */}
      </Routes>
  );
}

export default App;
