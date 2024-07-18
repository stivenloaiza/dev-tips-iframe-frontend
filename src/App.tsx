import React, { useEffect } from 'react';
import axios from 'axios';
import TipsSlider from './components/TipsSlider';
import './App.css';

const tipsData = [
  {
    "_id": "66908925195c5e700c1563",
    "title": "Manejo de errores en JavaScript",
    "body": "Usa try...catch para manejar errores y evitar que tu aplicación se detenga abruptamente. ",
    "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/try...catch",
    "available": true,
    "level": "junior",
    "technology": "javascript",
    "subtechnology": "error handling",
    "lang": "spanish",
    "createdAt": "2024-07-12T01:38:45.647Z",
    "createBy": "admin",
    "updatedAt": "2024-07-12T01:38:45.647Z",
    "deletedAt": null
  },
  {
    "_id": "66908925195c5e700c1564",
    "title": "Async/Await en JavaScript",
    "body": "Usa async/await para manejar promesas de manera más sencilla y legible.",
    "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/async_function",
    "available": true,
    "level": "junior",
    "technology": "c#",
    "subtechnology": "async/await",
    "lang": "english",
    "createdAt": "2024-07-12T01:38:45.647Z",
    "createBy": "admin",
    "updatedAt": "2024-07-12T01:38:45.647Z",
    "deletedAt": null
  },
  {
    "_id": "66908925195c5e700c1564",
    "title": "Async/Await en JavaScript",
    "body": "Usa async/await para manejar promesas de manera más sencilla y legible.",
    "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/async_function",
    "available": true,
    "level": "junior",
    "technology": "python",
    "subtechnology": "async/await",
    "lang": "english",
    "createdAt": "2024-07-12T01:38:45.647Z",
    "createBy": "admin",
    "updatedAt": "2024-07-12T01:38:45.647Z",
    "deletedAt": null
  },
  {
    "_id": "66908925195c5e700c1564",
    "title": "Async/Await en JavaScript",
    "body": "Usa async/await para manejar promesas de manera más sencilla y legible.",
    "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/async_function",
    "available": true,
    "level": "junior",
    "technology": "typescript",
    "subtechnology": "async/await",
    "lang": "english",
    "createdAt": "2024-07-12T01:38:45.647Z",
    "createBy": "admin",
    "updatedAt": "2024-07-12T01:38:45.647Z",
    "deletedAt": null
  },
  {
    "_id": "66908925195c5e700c1564",
    "title": "Async/Await en JavaScript",
    "body": "Usa async/await para manejar promesas de manera más sencilla y legible.",
    "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/async_function",
    "available": true,
    "level": "junior",
    "technology": "java",
    "subtechnology": "async/await",
    "lang": "english",
    "createdAt": "2024-07-12T01:38:45.647Z",
    "createBy": "admin",
    "updatedAt": "2024-07-12T01:38:45.647Z",
    "deletedAt": null
  }
];

const App: React.FC = () => {
  useEffect(() => {
    axios.post('https://example.com/api/endpoint', {}, {
      headers: {
        'x-api-key': '123'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }, []);

  return (
    <div className="App">
      <TipsSlider tips={tipsData} />
    </div>
  );
};

export default App;
