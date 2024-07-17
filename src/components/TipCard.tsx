import React from 'react';

interface TipCardProps {
  title: string;
  technology: string;
  subtechnology: string;
  body: string;
  link: string;
  lang: string;
}

const technologyStyles: { [key: string]: React.CSSProperties } = {
  javascript: {
    background: '#EFD81D',
    backgroundImage: 'linear-gradient(47deg, rgba(239,216,29,1) 39%, rgba(219,211,51,1) 76%, rgba(237,230,57,1) 100%)',
    color: 'black',
  },
  'c#': {
    backgroundColor: '#178600',
    color: 'white',
  },
  python: {
    background: 'rgb(0,0,0)',
    backgroundImage: 'linear-gradient(47deg, rgba(0,0,0,1) 39%, rgba(0,0,69,1) 76%, rgba(5,0,145,1) 100%)',
    color: 'white',
  },
  typescript: {
    backgroundColor: '#007acc',
    color: 'white',
  },
  java: {
    backgroundColor: '#b07219',
    color: 'white',
  },
};

const TipCard: React.FC<TipCardProps> = ({ title, technology, subtechnology, body, link, lang }) => {
  const cardStyle: React.CSSProperties = {
    ...technologyStyles[technology.toLowerCase()],
    padding: '16px',
    borderRadius: '8px',
    margin: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  return (
    <div className="tip-card" style={cardStyle}>
      <h1 style={{ fontSize: '30px' }}>{title}</h1>
      <p style={{fontSize: '15px'}}><strong>Technology:</strong> {technology}</p>
      <p style={{fontSize: '15px'}}><strong>Subtechnology:</strong> {subtechnology}</p>
      <p style={{ fontSize: '18px', padding: '30px 0' }}>{body}</p>
      <div style={{ alignSelf: 'flex-start' }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>{lang === 'spanish' ? 'Ver más' : 'See more'}</button>
        </a>
      </div>
    </div>
  );
};

export default TipCard;
