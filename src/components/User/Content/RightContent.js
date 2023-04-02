import CountDown from "./CountDown";
import { useRef } from "react";

const RightContent = (props) => {
  const refDiv = useRef([]);
  const setRef = (ref) => {
    refDiv.push(ref);
  };
  const { dataQuiz } = props;
  const onTimeup = () => {
    props.handleFinishQuiz();
  };

  const getClassQuestion = (index, question) => {
    //check answered
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find((a) => a.isSelected === true);
      if (isAnswered) {
        return "question selected";
      }
    }
    return "question";
  };

  const handleClickQuestion = (question, index) => {
    props.setIndex(index);
    if (refDiv.current) {
      console.log("refDiv", refDiv);
      refDiv.current.forEach((item) => {
        if (item && item.className === "question clicked") {
          item.className = "question";
        }
      });
    }
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find((a) => a.isSelected === true);
      if (isAnswered) {
        return "question selected";
      }
    }
    refDiv.current[index].className = "question clicked";
  };
  console.log("dataQuiz", dataQuiz);

  // const handleClickQuestion = (question, index) => {
  //   // props.setIndex(index);
  //   if (refDiv.current) {
  //     console.log("refDiv", refDiv);
  //     refDiv.current.forEach((item) => {
  //       if (item && item.className === "question selected clicked") {
  //         item.className = "question selected";
  //       } else if (item && item.className === "question  clicked") {
  //         item.className = "question";
  //       }
  //     });
  //   }
  //   refDiv.current[index].className =
  //     refDiv.current[index].className + " clicked";
  //   props.setIndex(index);
  // };
  // console.log("dataQuiz", dataQuiz);

  return (
    <>
      <div className="main-timer">
        <CountDown onTimeup={onTimeup} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                key={`question-abc-${index}`}
                className={getClassQuestion(index, item)}
                onClick={() => handleClickQuestion(item, index)}
                ref={(element) => (refDiv.current[index] = element)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default RightContent;
