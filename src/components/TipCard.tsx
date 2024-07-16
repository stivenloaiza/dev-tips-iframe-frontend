import React from 'react';

interface TipCardProps {
  title: string;
  technology: string;
  subtechnology: string;
  body: string;
  link: string;
  lang: string;
}

const technologyColors: { [key: string]: string } = {
  javascript: '#f0db4f',
  'c#': '#178600',
  python: '#306998',
  typescript: '#007acc',
  java: '#b07219',
};

const TipCard: React.FC<TipCardProps> = ({ title, technology, subtechnology, body, link, lang }) => {
  const backgroundColor = technologyColors[technology.toLowerCase()] || '#ffffff';

  return (
    <div className="tip-card" style={{ backgroundColor }}>
      <h2>{title}</h2>
      <p><strong>Technology:</strong> {technology}</p>
      <p><strong>Subtechnology:</strong> {subtechnology}</p>
      <p>{body}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>{lang === 'spanish' ? 'Ver más' : 'See more'}</button>
      </a>
    </div>
  );
};

export default TipCard;
