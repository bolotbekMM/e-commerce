import React from 'react';
import './Help.css';
import Accordion from '../../components/UI/accordion/Accordionn';

import LogoIcon from '../../assets/images/materialsImages/helpimage.jpg';
import { getAccardionDataRequest } from '../../api/storeService';

const Help = () => {
  const [accordionData, setaccordionData] = React.useState([]);

  const getAccardionData = async () => {
    try {
      const response = await getAccardionDataRequest();
      setaccordionData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAccardionData();
  }, []);

  return (
    <div className="main-container">
      <div className="help-box">
        <div className="help-image-div">
          <img src={LogoIcon} alt="icons" />
        </div>
        <div className="help-accordion-outerdiv">
          <div className="help-title-div">
            <h3 className="help-title">Помощь</h3>
          </div>
          <div className="help-accordion-div">
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
