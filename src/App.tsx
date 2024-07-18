import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import TipsSlider from './components/TipsSlider';

const DataFetcher: React.FC = () => {
  const { apikeyUser } = useParams<{ apikeyUser: string }>();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (apikeyUser) {
      axios.post(`https://dev-tips-users-backend.onrender.com/v1/api/iframes/getApiKey/gi${apikeyUser}`, {}, {
        headers: {
          'x-api-key': 'rk0zdvhagd0kk0yhjr93vkbd2mekb0'
        }
      })
      .then(response => {
        setTips(response.data);
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

