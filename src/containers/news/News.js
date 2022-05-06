import React from 'react';
import './News.css';
import { getNewsDataRequest } from '../../api/storeService';

const News = () => {
  const [dataFromServer, setdataFromServer] = React.useState([]);
  const getNewsData = async () => {
    try {
      const response = await getNewsDataRequest();
      setdataFromServer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div className="main-container">
      <div className="divOfHeader-page">
        <h3 className="divOfHeader-h3">Новости</h3>
      </div>
      <div></div>
      {dataFromServer.map((item) => {
        return (
          <div key={item.id} className="news-box">
            <div className="image-box-news">
              <img src={item.url} alt="icon" />
            </div>
            <div className="text-box-news">
              <h3 className="header-news">{item.title}</h3>
              <p className="text-news">{item.describe}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
