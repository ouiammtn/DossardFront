import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SmallCard.css'; 

const SmallCard = ({ title, paragraph }) => {
  return (
    <div className="small-card">
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}


export default SmallCard;