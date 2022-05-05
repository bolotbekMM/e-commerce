import React from 'react';
import './InfoSection.css';
import { getNashiPreimushestvaRequest } from '../../../api/storeService';

const InfoSection = () => {
  const [dataFromServer, setdataFromServer] = React.useState({});
  const getNashiPreimushestva = async () => {
    try {
      const response = await getNashiPreimushestvaRequest();
      setdataFromServer(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  React.useEffect(() => {
    getNashiPreimushestva();
  }, []);

  return (
    <div className="main-container">
      <div className="last-box">
        <div>
          <h2>Наши преимущества</h2>
        </div>
        <div className="mini-boxes">
          <div className="box">
            <div className="divOfIcon">
              <img
                src={dataFromServer.money?.url}
                className="box-icon"
                alt="money-Icon"
              />
            </div>
            <div className="divOfParagraph">
              <h4>{dataFromServer.money?.title}</h4>
              <p>{dataFromServer.money?.text}</p>
            </div>
          </div>
          <div className="box">
            <div className="divOfIcon">
              <img
                src={dataFromServer.truck?.url}
                alt="truck-icon"
                className="box-icon"
              />
            </div>
            <div className="divOfParagraph">
              <h4>{dataFromServer.truck?.title}</h4>
              <p>{dataFromServer.truck?.text}</p>
            </div>
          </div>
          <div className="box">
            <div className="divOfIcon">
              <img
                src={dataFromServer.earPhone?.url}
                alt="truck-icon"
                className="box-icon"
              />
            </div>
            <div className="divOfParagraph">
              <h4>{dataFromServer.earPhone?.title}</h4>
              <p>{dataFromServer.earPhone?.text}</p>
            </div>
          </div>
          <div className="box">
            <div className="divOfIcon">
              <img
                src={dataFromServer.shop?.url}
                alt="truck-icon"
                className="box-icon"
              />
            </div>
            <div className="divOfParagraph">
              <h4>{dataFromServer.shop?.title}</h4>
              <p>{dataFromServer.shop?.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
