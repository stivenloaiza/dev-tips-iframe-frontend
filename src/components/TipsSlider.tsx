import React, { useState, useEffect } from 'react';
import TipCard from './TipCard';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import '../App.css';

interface Tip {
  _id: string;
  title: string;
  body: string;
  link: string;
  available: boolean;
  level: string;
  technology: string;
  subtechnology: string;
  lang: string;
  createdAt: string;
  createBy: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface TipsSliderProps {
  tips: Tip[];
}

const TipsSlider: React.FC<TipsSliderProps> = ({ tips }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);


 // Función para pasar al siguiente tip
  const nextTip = () => {
    setCurrentTipIndex((currentTipIndex + 1) % tips.length);
  };

  // Función para volver al tip anterior
  const prevTip = () => {
    setCurrentTipIndex((currentTipIndex - 1 + tips.length) % tips.length);
  };

  // useEffect para cambiar de tip automáticamente cada 8 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTip();
    }, 8000); // 8000 ms = 8 seconds

    return () => clearInterval(intervalId); 
  }, [currentTipIndex, tips.length]); 

  return (

      <div className="tips-slider">
        <div className="slider-buttons">
          <button onClick={prevTip}>
            <SlArrowLeft style={{ fontSize: '30px', color: 'white' }}/>
          </button>
          <button onClick={nextTip}>
            <SlArrowRight style={{ fontSize: '30px', color: 'white' }}/>
          </button>
        </div>
        <div className="tip-card-container">
          <TipCard {...tips[currentTipIndex]} />
        </div>
      </div>
  );
};

export default TipsSlider;
