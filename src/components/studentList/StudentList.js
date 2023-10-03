import React, { useState, useEffect } from "react";
import StudentCard from "../studentCard/StudentCard";
import './StudentList.scss'

const StudentList = () => {
  //hooks

  const [students, setStudents] = useState([]);

  //functions
  useEffect(() => {
    const url = `https://student-app-backend-october-422a553e0d4f.herokuapp.com/students`;

    // reach out to backend and get our students and update our students hook with the new data
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.students);
      });
  }, []); //empty array means run on mount

  //return or jsx 

  return (
    <div  className="studentList">
      {students.map((student) => {
    //  console.log(i)
        return (
          <div>
            <StudentCard student={student}/>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
