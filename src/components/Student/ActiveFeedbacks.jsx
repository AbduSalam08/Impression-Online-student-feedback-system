import React, { Component, useEffect, useState } from "react";
import "../../styles/Student/ActiveFeedback.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import axios from "axios";

const ActiveFeedbacks = () => {
  Aos.init();

  const [Questions, setQuestions] = useState();
  const [localCopy, setlocalCopy] = useState();
  const [sortbyDateOrder, setSortbyDateOrder] = useState();
  const [sortbyNameOrder, setSortbyNameOrder] = useState();
  const [sortbyRecentOrder, setSortbyRecentOrder] = useState();

  const loadData = async () => {
    const result = await axios.get("http://localhost:4000/Questions");
    setQuestions(result.data);
    setlocalCopy(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const onSearch = (e) => {
    let searchInput = e.target.value.toLowerCase();
    setSearchTerm(searchInput);
    let filteredData =
      Questions &&
      Questions.filter((e) =>
        e.Feedback_title.toLowerCase().includes(searchTerm)
      );
    e.target.value ? setQuestions(filteredData) : setQuestions(localCopy);
    console.log(searchTerm);
  };

  //sort by recent(ascending) order
  const sortbyRecent = () => {
    setSortbyRecentOrder(
      Questions &&
        Questions.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
        })
    );
    sortbyRecentOrder && setQuestions(sortbyRecentOrder);
    setSortbyDateOrder("");
    setSortbyNameOrder("");
  };

  //sort by desceding order
  const sortbyDate = () => {
    setSortbyDateOrder(
      Questions &&
        Questions.sort((a, b) => {
          if (a.id > b.id) {
            return -1;
          }
        })
    );
    sortbyDateOrder && setQuestions(sortbyDateOrder);
    setSortbyNameOrder("");
    sortbyRecentOrder("");
  };

  //sort by name order
  const sortbyName = () => {
    setSortbyNameOrder(
      Questions &&
        Questions.sort((a, b) => {
          if (a.Feedback_title < b.Feedback_title) {
            return -1;
          }
        })
    );

    sortbyNameOrder && setQuestions(sortbyNameOrder);
    setSortbyDateOrder("");
    sortbyRecentOrder("");
  };
  return (
    <div className="activeWrap container">
      {/* filter search wrap */}
      <div className="filterSearchWrap">
        <div className="filtS">
          <div className="dropdown">
            <button
              className="btn btn-dark btn-sm px-4 py-1 filtBtn me-3 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-aos="fade-right"
              data-aos-duration="650"
            >
              <i className="fa fa-filter pe-1"></i>{" "}
              <span className="pe-2">Filter</span>
            </button>
            <ul className="dropdown-menu menufilt mt-1">
              <li onClick={sortbyRecent}>
                <a className="dropdown-item filterLinks">Recent</a>
              </li>
              <li onClick={sortbyName}>
                <a className="dropdown-item filterLinks">by name</a>
              </li>
              <li onClick={sortbyDate}>
                <a className="dropdown-item filterLinks">by date</a>
              </li>
            </ul>
          </div>
          <div className="search" data-aos="fade-right" data-aos-duration="650">
            <i className="fa fa-search me-2"></i>
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={onSearch}
              className="searchBar"
              placeholder="Search by name"
              autoComplete="off"
            />
          </div>
        </div>
        <p className="totalCount" data-aos="fade-left" data-aos-duration="650">
          Available feedbacks (
          {Questions && Questions.filter((e) => e.completed == false).length})
        </p>
      </div>

      <div className="activeContent" data-aos="fade-up" data-aos-duration="650">
        {Questions && Questions.length == 0 ? (
          <div className="noData">Oops ! No Data Found </div>
        ) : (
          Questions &&
          Questions.filter((e) => e.completed == false).map((e, i) => {
            return (
              <div className="acd" key={i}>
                <h2 className="acdHead">{e.Feedback_title}</h2>
                <div className="acdDesc">
                  <span>Date added : {e.date}</span>
                  <span>Added by : {e.College}</span>
                  <span>Total questions : 5</span>
                </div>
                <Link to={`Form/${e.id}`} className="takeBtn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            );
          })
        )}
        {/* templ */}
        {/* <div className="acd">
          <h2 className="acdHead">BSC Department</h2>
          <div className="acdDesc">
            <span>Date added : 13/2/2023</span>
            <span>Added by : Dev College Management</span>
            <span>Total questions : 15</span>
          </div>
          <button className="takeBtn">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>*/}
      </div>
    </div>
  );
};

export default ActiveFeedbacks;
