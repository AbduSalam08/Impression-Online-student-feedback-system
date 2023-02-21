import React, { useEffect, useState } from "react";
import Aos from "aos";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ViewResponse = () => {
  Aos.init();
  const navigate = useNavigate();
  const { code } = useParams();
  const [Questions, setQuestions] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const goback = () => {
    navigate(-1);
  };

  const loadData = async () => {
    const result = await axios.get(`http://localhost:4000/Questions/${code}`);
    setQuestions(result.data);
  };
  return (
    <div className="formWrap">
      <button
        // to={"Dashboard"}
        onClick={goback}
        data-aos="fade-right"
        className="fa fa-arrow-left backBtn"
      ></button>
      {Questions && (
        <form action="#" autoComplete="off" data-aos="fade-up">
          <div className="formTitle">
            <h1>{Questions.Feedback_title}</h1>
          </div>
          <div className="formDesc">
            <p>Your previous response of this feedback.</p>
          </div>
          <div className="formBasicInfo">
            <div className="un fld">
              <p>{Questions.Your_Name.que}</p>
              <span>{Questions.Your_Name.answer}</span>
            </div>
            <div className="eId fld">
              <p>{Questions.Email_ID.que}</p>
              <span>{Questions.Email_ID.answer}</span>
            </div>
            <div className="dep fld">
              <p>{Questions.Department_branch.que}</p>
              <span>{Questions.Department_branch.answer}</span>
            </div>
            <div className="sec fld">
              <p>{Questions.Section.que}</p>
              <span>{Questions.Section.answer}</span>
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
            <div className="QWrap">
              <p className="quesT">{Questions.que1.que}</p>
              <span>{Questions.que1.answer}</span>
            </div>

            <div className="QWrap">
              <p className="quesT">{Questions.que2.que}</p>
              <span>{Questions.que2.answer}</span>
            </div>

            <div className="QWrap">
              <p className="quesT">{Questions.que3.que}</p>
              <span>{Questions.que3.answer}</span>
            </div>

            <div className="QWrap">
              <p className="quesT">{Questions.que4.que}</p>
              <span>{Questions.que4.answer}</span>
            </div>

            <div className="QWrap">
              <p className="quesT">{Questions.que5.que}</p>
              <span>{Questions.que5.answer}</span>
            </div>
          </div>

          {/* comments */}
          <div className="comments fld">
            <p>{Questions.additional.que} (Optional)</p>
            <textarea
              cols="30"
              rows="10"
              readOnly
              value={Questions.additional.answer}
            ></textarea>
          </div>
        </form>
      )}
    </div>
  );
};

export default ViewResponse;
