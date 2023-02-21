import React, { useEffect, useState } from "react";
import "../../styles/Student/form.css";
import Aos from "aos";
import axios, { Axios } from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from "../Alert";
import { Toast } from "react-bootstrap";

const FeedbackForm = () => {
  Aos.init();
  const navigate = useNavigate();
  const { id } = useParams();
  const [Questions, setQuestions] = useState();
  //toast
  //toast type
  const [toastType, setToastType] = useState("");
  const [toastFlag, setToastFlag] = useState(false);
  const [ErrorText, setErrorText] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const goback = () => {
    navigate(-1);
  };

  const loadData = async () => {
    const result = await axios.get(`http://localhost:4000/Questions/${id}`);
    setQuestions(result.data);
  };

  //user state
  const [Your_Name, setYour_Name] = useState("");
  const [Email_ID, setEmail_ID] = useState("");
  const [Department_branch, setDepartment_branch] = useState("");
  const [Section, setSection] = useState("");
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");
  const [sugg, setSugg] = useState("");

  //onsubmit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    var letters = /^[A-Za-z]+$/;

    //options checkes or not
    let optVals = document.querySelectorAll(".optionValue");

    // validation
    if (
      !Your_Name.match(letters) ||
      Email_ID.length == 0 ||
      !Section.match(letters) ||
      !Department_branch.match(letters) ||
      q1.length == 0 ||
      q2.length == 0 ||
      q3.length == 0 ||
      q4.length == 0 ||
      q5.length == 0
    ) {
      setToastFlag(true);
      setToastType("danger");
      setErrorText("Please fill out all the fields ! ");
    } else {
      setToastFlag(true);
      setToastType("primary");
      setErrorText("Feedback Submitted 🎉 !");

      //putting values into database (json)
      let result = axios
        .patch(`http://localhost:4000/Questions/${id}`, {
          Your_Name: {
            que: "Your name",
            ansType: "text",
            answer: Your_Name,
          },
          Email_ID: {
            que: "Email ID",
            ansType: "text",
            answer: Email_ID,
          },
          Department_branch: {
            que: "Department branch",
            ansType: "text",
            answer: Department_branch,
          },
          Section: {
            que: "Section",
            ansType: "text",
            answer: Section,
          },
          completed: true,
          que1: {
            que: Questions.que1.que,
            options: Questions.que1.options,
            ansType: Questions.que1.ansType,
            answer: q1,
            key: Questions.que1.key,
          },
          que2: {
            que: Questions.que2.que,
            options: Questions.que2.options,
            ansType: Questions.que2.ansType,
            answer: q2,
            key: Questions.que2.key,
          },
          que3: {
            que: Questions.que3.que,
            options: Questions.que3.options,
            ansType: Questions.que3.ansType,
            answer: q3,
            key: Questions.que3.key,
          },
          que4: {
            que: Questions.que4.que,
            options: Questions.que4.options,
            ansType: Questions.que4.ansType,
            answer: q4,
            key: Questions.que4.key,
          },
          que5: {
            que: Questions.que5.que,
            options: Questions.que5.options,
            ansType: Questions.que5.ansType,
            answer: q5,
            key: Questions.que5.key,
          },
          additional: {
            que: Questions.additional.que,
            ansType: Questions.additional.ansType,
            answer: sugg,
          },
        })
        .then((res) => res.data);
      // console.log(result);

      setTimeout(() => {
        navigate("/Dashboard/Active_Feedbacks");
      }, 1000);
    }
  };

  //clear form
  const clearForm = () => {
    setYour_Name("");
    setEmail_ID("");
    setDepartment_branch("");
    setSection("");
    setq1("");
    setq2("");
    setq3("");
    setq4("");
    setq5("");
    sugg("");
  };

  return (
    <div className="formWrap">
      <button
        onClick={goback}
        data-aos="fade-right"
        className="fa fa-arrow-left backBtn"
      ></button>
      {Questions && (
        <form
          action="#"
          autoComplete="off"
          data-aos="fade-up"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <div className="formTitle">
            <h1>{Questions.Feedback_title}</h1>
          </div>
          <div className="formDesc">
            <p>{Questions.description}</p>
          </div>
          <div className="formBasicInfo">
            <div className="un fld">
              <p>{Questions.Your_Name.que}</p>
              <input
                placeholder="Your answer"
                type={Questions.Your_Name.ansType}
                name="Your_Name"
                id="Your_Name"
                // value={userBasic.Your_Name}
                onChange={(e) => {
                  setYour_Name(e.target.value);
                }}
              />
            </div>
            <div className="eId fld">
              <p>{Questions.Email_ID.que}</p>
              <input
                placeholder="Your answer"
                type={Questions.Email_ID.ansType}
                name="Email_ID"
                id="Email_ID"
                // value={userBasic.Email_ID}
                onChange={(e) => {
                  setEmail_ID(e.target.value);
                }}
              />
            </div>
            <div className="dep fld">
              <p>{Questions.Department_branch.que}</p>
              <input
                placeholder="Your answer"
                type={Questions.Department_branch.ansType}
                name="Department_branch"
                id="Department_branch"
                // value={userBasic.Department_branch}
                onChange={(e) => {
                  setDepartment_branch(e.target.value);
                }}
              />
            </div>
            <div className="sec fld">
              <p>{Questions.Section.que}</p>
              <input
                placeholder="Your answer"
                type={Questions.Section.ansType}
                name="Section"
                id="Section"
                // value={userBasic.Section}
                onChange={(e) => {
                  setSection(e.target.value);
                }}
              />
            </div>
            <div className="insti fld">
              <p>College / Institution</p>
              <input
                type="text"
                value={Questions.College}
                readOnly
                name="College"
                id="College"
              />
            </div>
          </div>
          <div className="fbQues">
            {/* que 1 */}
            <div className="QWrap">
              <p className="quesT">{Questions.que1.que}</p>
              {Questions.que1.options.map((v, idx) => {
                return (
                  <div className="options" key={idx}>
                    <input
                      type={Questions.que1.ansType}
                      id={v}
                      name={Questions.que1.key}
                      className="optionValue"
                      onChange={(e) => setq1(e.target.id)}
                    />
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>

            <div className="QWrap">
              {/*  que 2 */}
              <p className="quesT">{Questions.que2.que}</p>
              {Questions.que2.options.map((v, idx) => {
                return (
                  <div className="options" key={idx}>
                    <input
                      type={Questions.que2.ansType}
                      id={v}
                      name={Questions.que2.key}
                      className="optionValue"
                      onChange={(e) => setq2(e.target.id)}
                    />
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>

            <div className="QWrap">
              {/* que 3  */}
              <p className="quesT">{Questions.que3.que}</p>
              {Questions.que3.options.map((v, idx) => {
                return (
                  <div className="options" key={idx}>
                    <input
                      type={Questions.que3.ansType}
                      id={v}
                      name={Questions.que3.key}
                      className="optionValue"
                      onChange={(e) => setq3(e.target.id)}
                    />
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>

            <div className="QWrap">
              {/* que 4 */}
              <p className="quesT">{Questions.que4.que}</p>
              {Questions.que4.options.map((v, idx) => {
                return (
                  <div className="options" key={idx}>
                    <input
                      type={Questions.que4.ansType}
                      id={v}
                      name={Questions.que4.key}
                      className="optionValue"
                      onChange={(e) => setq4(e.target.id)}
                    />
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>

            <div className="QWrap">
              {/* que 5 */}
              <p className="quesT">{Questions.que5.que}</p>
              {Questions.que5.options.map((v, idx) => {
                return (
                  <div className="options" key={idx}>
                    <input
                      type={Questions.que5.ansType}
                      id={v}
                      name={Questions.que5.key}
                      className="optionValue"
                      onChange={(e) => setq5(e.target.id)}
                    />
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* comments */}
          <div className="comments fld">
            <p>{Questions.additional.que} (Optional)</p>
            <textarea
              cols="30"
              rows="10"
              onChange={(e) => setSugg(e.target.value)}
            ></textarea>
          </div>
          <div className="formFooter">
            <button type="reset" className="resetForm" onClick={clearForm}>
              Clear form
            </button>
            <button type="submit" className="submitForm">
              Submit
            </button>
          </div>
        </form>
      )}
      <Toast
        show={toastFlag}
        delay={2000}
        autohide
        className="toastManual"
        onClose={() => setToastFlag(false)}
      >
        <Toast.Body
          style={{ fontWeight: "bold", fontFamily: "roboto, sans-serif" }}
          className={`text-${toastType} bg-dark  text-center rounded-2`}
        >
          {ErrorText}
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default FeedbackForm;
