import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from '@pages/Home';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
