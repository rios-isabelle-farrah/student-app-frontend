import React, { useState, useEffect } from "react";
import SearchBar from '../searchBar/SearchBar'
import StudentCard from "../studentCard/StudentCard";

import './StudentList.scss'

const StudentList = () => {
  //hooks

  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

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


//when serach term is updated this component will rerender
// what to do on a re render?
let filteredStudents = students;
if(searchTerm){
  filteredStudents = students.filter(student => {
const fullName = `${student.firstName} ${student.lastName}`
const fullNameToLowerCase = fullName.toLowerCase();
const searchTermToLowerCase = searchTerm.toLowerCase();
return fullNameToLowerCase.includes(searchTermToLowerCase)
  
  }) 
}






  //return or jsx 

  return (
    <div className="studentList">
      {/* <input className="studentList__search" placeholder="Search By Name"/> */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      {filteredStudents.map((student) => {
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
