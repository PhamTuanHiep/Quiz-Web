import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";

const DetailQuiz = (props) => {
  const params = useParams();
  const location = useLocation();
  console.log("location:", location);
  const quizId = params.id;

  useEffect(() => {
    fetchQuestion();
  }, [quizId]);

  const fetchQuestion = async () => {
    let res = await getDataQuiz(quizId);

    if (res && res.EC === 0) {
      // console.log("res:", res);
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      // console.log("data:", data);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </div>
        <hr></hr>
        <div className="q-body"></div>
        <div className="q-content">
          <div className="question">Question 1: how are you doing ?</div>
          <div className="answer">
            <div className="a-child">A. asfadasd</div>
            <div className="a-child">B. asfadasd</div>
            <div className="a-child">C. asfadasd</div>
          </div>
          question content
        </div>
        <div className="footer ">
          <button className="btn btn-secondary">Prev</button>
          <button className="btn btn-primary ">Next</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};
export default DetailQuiz;
