import React from 'react';
import './styles/home.css'; 
import { MdOutlineCameraRoll } from "react-icons/md";
import SmallCard from './components/SmallCard';


const Home = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <div className="card">
          <MdOutlineCameraRoll size={64} color="white" />
          <h1>Welcome</h1>
          <p>Upload Pictures of Get Yours!!</p>
          <div className='SmallCards'>
                <SmallCard 
                title="Upload your photos"
                paragraph="This will take time to process"
            />
                <SmallCard 
            title="Get Your Photos"
            paragraph="find pictures in which you appear"
            />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
