import React from "react";

const MainLayout = ({ questions }) => {
  return (
    <div className="container">
      {questions.map((question) => {
        <div>
          <div className="question-div">
            <span className="question">{question}</span>
          </div>
          <div className="answers">
            <span className="answer">answer1</span>
            <span className="answer">answer2</span>
            <span className="answer">answer3</span>
            <span className="answer">answer4</span>
          </div>
          <button className="next">Next</button>
        </div>;
      })}
    </div>
  );
};

export default MainLayout;
