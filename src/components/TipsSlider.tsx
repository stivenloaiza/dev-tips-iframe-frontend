import React, { useState } from 'react';
import TipCard from './TipCard';

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

  const nextTip = () => {
    setCurrentTipIndex((currentTipIndex + 1) % tips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex((currentTipIndex - 1 + tips.length) % tips.length);
  };

  return (
    <div className="tips-slider">
      <button onClick={prevTip}>Previous</button>
      <TipCard {...tips[currentTipIndex]} />
      <button onClick={nextTip}>Next</button>
    </div>
  );
};

export default TipsSlider;
