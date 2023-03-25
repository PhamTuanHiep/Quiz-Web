import { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {
    fetchQuestion();
  }, [quizId]);
  const fetchQuestion = async () => {
    let res = await getDataQuiz(quizId);
    console.log(">>check question:", res);
  };
  console.log("ckeck params:", params);
  return <div className="detail-quiz--container">DetailQuiz</div>;
};
export default DetailQuiz;
