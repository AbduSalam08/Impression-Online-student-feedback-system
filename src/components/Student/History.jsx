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
    let currentQues = Questions[id - 1];
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
          que: currentQues.que1.que,
          options: currentQues.que1.options,
          ansType: currentQues.que1.ansType,
          answer: "",
          key: currentQues.que1.key,
        },
        que2: {
          que: currentQues.que2.que,
          options: currentQues.que2.options,
          ansType: currentQues.que2.ansType,
          answer: "",
          key: currentQues.que2.key,
        },
        que3: {
          que: currentQues.que3.que,
          options: currentQues.que3.options,
          ansType: currentQues.que3.ansType,
          answer: "",
          key: currentQues.que3.key,
        },
        que4: {
          que: currentQues.que4.que,
          options: currentQues.que4.options,
          ansType: currentQues.que4.ansType,
          answer: "",
          key: currentQues.que4.key,
        },
        que5: {
          que: currentQues.que5.que,
          options: currentQues.que5.options,
          ansType: currentQues.que5.ansType,
          answer: "",
          key: currentQues.que5.key,
        },
        additional: {
          que: currentQues.additional.que,
          ansType: currentQues.additional.ansType,
          answer: "",
        },
      })
      .then((res) => res.data);
    setTimeout(() => {
      navigate("/Dashboard/Active_Feedbacks");
    }, 1000);
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
                    <tr key={i} id={e.id}>
                      <td>{e.Feedback_title}</td>
                      <td>{e.date}</td>
                      <td>05</td>
                      <td>Completed</td>
                      <td>
                        <Link to={`View_response/${e.id}`}>
                          <i className="fa fa-eye" title="View my response"></i>
                        </Link>
                        <i
                          className="fa fa-trash"
                          title="Delete my response"
                          onClick={() => {
                            let curid = e.id;
                            dltResponse(curid);
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
