import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TipsSlider from './components/TipsSlider';
import './App.css';

const DataFetcher: React.FC = () => {
  const { apikeyUser } = useParams<{ apikeyUser: string }>();
  const [tips, setTips] = useState<any[]>([]);

  useEffect(() => {
    if (apikeyUser) {
      axios.get(`http://localhost:4000/v1/api/iframe/iframeForFront/${apikeyUser}`, {
        headers: {
          'x-api-key': 'rk0zdvhagd0kk0yhjr93vkbd2mekb0',
        },
      })
      .then(response => {
        if (Array.isArray(response.data)) {
          setTips(response.data);
          console.log(response.data);
        } else {
          console.error('Response is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }
  }, [apikeyUser]);
  
 
  return (
    <div className="App">
      <TipsSlider tips={tips} />
    </div>
  );
};

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/:apikeyUser" element={<DataFetcher />} />
      </Routes>
    </Router>
  );
};

export default App;


