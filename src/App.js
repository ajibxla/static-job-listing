import "./App.css";
import JobCard from "./components/JobCard";
import { useState, useEffect } from "react";
import data from "/Users/ajibolaokungbaye/static-job-listing/src/data.json";
import { nanoid } from "nanoid";

function App() {
  const [jobData, setJobData] = useState(data);
  const [filterArr, setFilterArr] = useState([]);

  const JobCardList = jobData.map((item) => {
    const handleClick = (item) => {
      if (filterArr.indexOf(item) === -1) {
        setFilterArr((prev) => [...prev, item]);
      }
    };

    const itemArray = [item.level, ...item.tools, ...item.languages];

    let filterJobs = (itemArray, filterArr) => {
      return filterArr.every((value) => itemArray.includes(value));
    };

    const deleteJobTag = (jobtag) => {
      const newTags = itemArray.filter((item) => {
        return item !== jobtag;
      });

      console.log(newTags);
    };

    return (
      <div key={nanoid()}>
        {filterJobs(itemArray, filterArr) && (
          <article className="card" key={item.id}>
            <div className="card-container">
              <div className="container-first-section">
                <div className="logo">
                  <img src={item.logo} alt="" />
                </div>
                <div className="job-details">
                  <div className="company--jobtags">
                    <p className="company">{item.company}</p>
                    <div className="jobtags">
                      {item.new && (
                        <div className="newtag">
                          <p className="new tag">New!</p>
                        </div>
                      )}
                      {item.featured && (
                        <div className="featuretag">
                          <p className="featured tag">featured</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="position">
                    <p>{item.position}</p>
                  </div>
                  <div className="date--location">
                    <p>{item.postedAt}</p>
                    <span></span>
                    <p> {item.contract} </p>
                    <span></span>
                    <p> {item.location} </p>
                  </div>
                </div>
              </div>
              <div className="container-second-section">
                {itemArray.map((item, index) => {
                  return (
                    <button key={index} onClick={() => handleClick(item)}>
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </article>
        )}
      </div>
    );
  });

  const deleteJobTag = (btn) => {
    const newArray = filterArr.filter((item) => {
      return item !== btn;
    });

    setFilterArr(newArray);
  };

  const filterBtns = filterArr.map((btn) => {
    return (
      <div className="filter-btn" key={nanoid()}>
        <div className="filter-tag-btn">{btn}</div>
        <div className="delete" onClick={() => deleteJobTag(btn)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </div>
      </div>
    );
  });

  const clearTags = () => {
    setFilterArr([]);
  };

  return (
    <div className="App">
      <main id="main">
        <div className="first-section">
          <div
            className={`filter-bar ${filterArr.length > 0 ? "active " : ""}`}
          >
            <div className="filtered-btns">{filterBtns}</div>
            <div className="clear-section">
              <button
                onClick={clearTags}
                className={` ${filterArr.length > 0 ? "active " : ""}`}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="second-section">{JobCardList}</div>
      </main>
    </div>
  );
}

export default App;
