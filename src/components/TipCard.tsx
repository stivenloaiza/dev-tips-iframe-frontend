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
    background: 'rgb(0,0,0)',
    backgroundImage: 'linear-gradient(61deg, rgba(0,93,23,1) 0%, rgba(11,123,10,1) 49%, rgba(5,137,63,1) 96%)',
    color: 'white',
  },
  'c#': {
    background: 'rgb(0,0,0)',
    backgroundImage:'linear-gradient(47deg, rgba(100,32,118,1) 39%, rgba(124,53,132,1) 76%, rgba(150,77,146,1) 100%)',
    color: 'white',
  },
  python: {
    background: 'rgb(0,0,0)',
    backgroundImage: 'linear-gradient(47deg, rgba(54,108,156,1) 39%, rgba(81,127,168,1) 76%, rgba(126,164,193,1) 100%)',
    color: 'white',
  },
  typescript: {
    backgroundColor: '#007acc',
    backgroundImage:'linear-gradient(47deg, rgba(0,0,0,1) 39%, rgba(0,0,69,1) 76%, rgba(5,0,145,1) 100%)',
    color: 'white',
  },
  java: {
    backgroundColor: '#b07219',
    backgroundImage: 'linear-gradient(47deg, rgba(252,102,4,1) 39%, rgba(252,154,4,1) 76%, rgba(252,154,52,1) 100%)',
    color: 'white',
  },
};

const TipCard: React.FC<TipCardProps> = ({ title, technology = '', subtechnology, body, link, lang }) => {
  const technologyKey = technology ? technology.toLowerCase() : '';

  const cardStyle: React.CSSProperties = {
    ...technologyStyles[technologyKey],
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
