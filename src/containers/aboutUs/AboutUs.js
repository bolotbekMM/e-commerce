import React from 'react';
import { getAboutUsRequest } from '../../api/storeService';
import './AboutUs.css';

const AboutUs = () => {
  const [dataFromServer, setdataFromServer] = React.useState({});

  const getAboutUs = async () => {
    try {
      const response = await getAboutUsRequest();
      setdataFromServer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <div className="main-container">
      <div className="containerre">
        <div className="boxOfImagesAboutUs">
          <div className="image-aboutUs">
            <img src={dataFromServer.url1} alt="icons" />
          </div>
          <div className="image-aboutUs">
            <img src={dataFromServer.url2} alt="icons" />
          </div>
        </div>
        <div className="boxOfImagesAboutUs2">
          <div className="image-aboutUs2">
            <img src={dataFromServer.url3} alt="icons" />
          </div>
        </div>
        <div className="text-aboutUs-outer-div">
          <div className="text-aboutUs">
            <h3>{dataFromServer.title}</h3>
            <p>{dataFromServer.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
