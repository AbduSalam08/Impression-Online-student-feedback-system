import React, { useEffect, useState } from "react";
import "../../styles/Student/history.css";
import Aos from "aos";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const History = (props) => {
  Aos.init();
  const navigate = useNavigate();
  const { code } = useParams();

  const [Questions, setQuestions] = useState(props.resp);
  const [completed, setCompleted] = useState();

  // filter out completed data
  let completedData = Questions && Questions.filter((e) => e.completed);
  // filter out incompleted or pending data
  let pendingData = Questions && Questions.filter((e) => e.completed == false);
  const [dltid, setdltid] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(`http://localhost:4000/Questions`);
    setQuestions(result.data);
  };

  //delete response
  const dltResponse = (id) => {
    let result = axios
      .patch(`http://localhost:4000/Questions/${id}`, {
        Your_Name: {
          que: "Your name",
          ansType: "text",
          answer: "",
        },
        Email_ID: {
          que: "Email ID",
          ansType: "text",
          answer: "",
        },
        Department_branch: {
          que: "Department branch",
          ansType: "false",
          answer: "",
        },
        Section: {
          que: "Section",
          ansType: "text",
          answer: "",
        },
        completed: false,
        que1: {
          que: Questions[id].que1.que,
          options: Questions[id].que1.options,
          ansType: Questions[id].que1.ansType,
          answer: "",
          key: Questions[id].que1.key,
        },
        que2: {
          que: Questions[id].que2.que,
          options: Questions[id].que2.options,
          ansType: Questions[id].que2.ansType,
          answer: "",
          key: Questions[id].que2.key,
        },
        que3: {
          que: Questions[id].que3.que,
          options: Questions[id].que3.options,
          ansType: Questions[id].que3.ansType,
          answer: "",
          key: Questions[id].que3.key,
        },
        que4: {
          que: Questions[id].que4.que,
          options: Questions[id].que4.options,
          ansType: Questions[id].que4.ansType,
          answer: "",
          key: Questions[id].que4.key,
        },
        que5: {
          que: Questions[id].que5.que,
          options: Questions[id].que5.options,
          ansType: Questions[id].que5.ansType,
          answer: "",
          key: Questions[id].que5.key,
        },
        additional: {
          que: Questions[id].additional.que,
          ansType: Questions[id].additional.ansType,
          answer: "",
        },
      })
      .then((res) => res.data);
    setTimeout(() => {
      navigate("/Dashboard/Active_Feedbacks");
    }, 1000);
    console.log(result);
  };

  return (
    <div className="historyWrap container px-5">
      <div
        className="completedList hL"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="tableTitle">Completed</div>
        <div className="table-responsive w-100 mt-3">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Total questions</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {completedData && completedData.length == 0 ? (
                <tr>
                  <td className="tdErr" colSpan="5">
                    No feedbacks completed !
                  </td>
                </tr>
              ) : (
                completedData &&
                completedData.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.Feedback_title}</td>
                      <td>{e.date}</td>
                      <td>05</td>
                      <td>Completed</td>
                      <td>
                        <Link to={`View_response/${i + 1}`}>
                          <i className="fa fa-eye" title="View my response"></i>
                        </Link>
                        <i
                          className="fa fa-trash"
                          title="Delete my response"
                          onClick={() => {
                            dltResponse(i + 1);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="pendingList hL"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="tableTitle">Pending</div>
        <div className="table-responsive w-100 mt-3">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Total questions</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingData && pendingData.length == 0 ? (
                <tr>
                  <td className="tdErr" colSpan="4">
                    Nothing in pending !
                  </td>
                </tr>
              ) : (
                pendingData &&
                pendingData.map((e) => {
                  return (
                    <tr>
                      <td>{e.Feedback_title}</td>
                      <td>{e.date}</td>
                      <td>05</td>
                      <td>Pending</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="allHistory hL">
        <div className="tableTitle">All </div>
        <div className="table-responsive w-100 mt-3">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Total questions</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {Questions.length == 0 ? (
                <tr>
                  <td className="tdErr" colSpan="4">
                    No Feedbacks Found !
                  </td>
                </tr>
              ) : (
                Questions.map((e) => {
                  return (
                    <tr>
                      <td>{e.Feedback_title}</td>
                      <td>{e.date}</td>
                      <td>05</td>
                      <td>{e.completed ? "Completed" : "Pending"}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
