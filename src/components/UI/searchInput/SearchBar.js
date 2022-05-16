import React, { useState } from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../../assets/images/search.svg';
import { ReactComponent as CloseIcon } from '../../../assets/images/close-icon.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SearchBar({ productData }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate(`/searchpage/${wordEntered}`);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = productData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Поиск"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            // <Link
            //   to={`/searchpage/${value.name}`}
            //   className="dataItem"
            //   onClick={clearInput}
            // >
            <SearchIcon onClick={navigateToSearch} />
          ) : (
            // </Link>
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link
                to={`/searchpage/${value.name}`}
                className="alink"
                key={key}
                onClick={clearInput}
              >
                <p>{value.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
