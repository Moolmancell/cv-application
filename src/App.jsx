import { useState } from 'react'
import { PersonalDetails } from './components/PersonalDetails';
let details = {
  name: "",
  email: "",
  number: "",
  address: "",
  education: []
}

function App() {

  console.log(details)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");  
  const [address, setAddress] = useState("");

  const [education, setEducation] = useState([]);
  const [currentStateEd, setcurrentStateEd] = useState("notEditing");
  /* Editing:educ.id, notEditing */ 

  details.name = name;
  details.email = email;
  details.number = number;
  details.address = address;

  function setNewEducation(e) {

    e.preventDefault()

    let newEducation = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""  
    }

    setEducation([...details.education, newEducation])
  }

  function deleteEducation(e, id) {
    e.preventDefault();
    
    setEducation((prev) => prev.filter((ed) => ed.id !== id));
  }

  function setSchool(e, id) {
    setEducation((prevEducation) =>
      prevEducation.map((ed) =>
        ed.id === id ? { ...ed, school: e.target.value } : ed
      )
    );
  }

  function setDegree(e, id) {
    setEducation((prevEducation) =>
      prevEducation.map((ed) =>
        ed.id === id ? { ...ed, degree: e.target.value } : ed
      )
    );
  }

  function setStartDate(e, id) {
    setEducation((prevEducation) =>
      prevEducation.map((ed) =>
        ed.id === id ? { ...ed, startDate: e.target.value } : ed
      )
    );
  }

  function setEndDate(e, id) {
    setEducation((prevEducation) =>
      prevEducation.map((ed) =>
        ed.id === id ? { ...ed, endDate: e.target.value } : ed
      )
    );
  }

  function setLocation(e, id) {
    setEducation((prevEducation) =>
      prevEducation.map((ed) =>
        ed.id === id ? { ...ed, location: e.target.value } : ed
      )
    );
  }

  function editEducInfo(id) {
    setcurrentStateEd("Editing:"+id);
  }

  function doneEducInfo(e) {
    e.preventDefault()
    setcurrentStateEd("notEditing");
  }

  details.education = education;




  return <div className='flex'>
    <form>
      <PersonalDetails 
        nameUpdater={(e) => {
          setName(e.target.value)
        }}
        emailUpdater={(e) => {
          setEmail(e.target.value)
        }}
        numberUpdater={(e) => {
          setNumber(e.target.value)
        }}
        addressUpdater={(e) => {
          setAddress(e.target.value);
        }}
      />
    </form>

    <div className=''>
      {/*  */}
      <h1>{details.name}</h1>
      <h1>{details.email}</h1>
      <h1>{details.number}</h1>
      <h1>{details.address}</h1>
    </div>
  
  </div>
}

export default App
