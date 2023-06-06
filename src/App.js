import './App.css';
import React from 'react';
// import CampaignMain from './components/createCampaignMain.jsx'
import InfluencerSearch from './components/influencerSearch.jsx'
import Gender from './components/gender.jsx'
import Discover from './components/discover.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Gender/>}></Route>
      <Route path='/is' element={<InfluencerSearch/>}></Route>
      <Route path='/discover' element={<Discover/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
