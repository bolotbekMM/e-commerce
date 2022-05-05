import React from 'react';
import './Accordion.css';
// import { accordionData } from '../../../containers/MainPage/sections/Adding/constants';

import ArrowUp from '../../../assets/images/arrowup.svg';
import ArrowDown from '../../../assets/images/arrowdown.svg';

function Accordion({ accordionData }) {
  const [toggle, setToggle] = React.useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div>
      {accordionData.map((value) => {
        const { id, question, answer } = value;
        return (
          <div key={id}>
            <div
              className="card-header"
              onClick={() => handleToggle(id)}
              style={{ cursor: 'pointer' }}
            >
              <b className="accordion-question">{question}</b>
              <div>
                {id === toggle ? (
                  <img src={ArrowUp} alt="iconDown" />
                ) : (
                  <img src={ArrowDown} alt="iconUp" />
                )}
              </div>
            </div>
            {id === toggle ? (
              <div className="card-body">
                <span className="accordion-answer">{answer}</span>
              </div>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
