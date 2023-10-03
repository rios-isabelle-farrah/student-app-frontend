import React from "react";
import "./StudentCard.scss";

const StudentCard = ({ student }) => {
  //hooks or data we are grabbing
  const { pic, firstName, lastName, company, skill, email, grades } = student;

  // functions

  const calculateAverage = (grades) => {
    // one way to calculate average
    // let sum = 0
    // grades.map(grade => {
    //     sum += Number(grade);
    // })
    // return sum /grades.length
    // second option to calculate average
    // return grades.reduce((sum,val) => sum + Number(val), 0)/grades
    // the 0 in reduce function tells function that number needs to be zero at start of function
    // third option to calculate average..cleaner option
    const sum = grades.reduce((sum, val) => sum + Number(val), 0);
    return sum / grades.length;
  };

  return (
    <div className="studentCard">
      <div className="studentCard__profilePic"> <img src={pic} alt="headshot" /> </div>
      <div className="studentCard__info">
      <div className="studentCard__name">{`${firstName} ${lastName}`}</div>
      <div className="studentCard__infoLine">Email:{email}</div>
      <div className="studentCard__infoLine">Company:{company}</div>
      <div className="studentCard__infoLine">Skill:{skill}</div>
      <div className="studentCard__infoLine">Average: {calculateAverage(grades).toFixed(2)}%</div>
    </div>
    </div>
  );
};

export default StudentCard;
