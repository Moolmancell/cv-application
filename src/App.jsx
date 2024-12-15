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

  {/* Personal Details */}

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");  
    const [address, setAddress] = useState("");

    function setNewName(e) {
      setName(e.target.value)
    }
    details.name = name;

    function setNewEmail(e) {
      setEmail(e.target.value);
    }
    details.email = email;
    
    function setNewNumber(e) {
      setNumber(e.target.value);
    }
    details.number = number;

    function setNewAddress(e) {
      setAddress(e.target.value);
    }
    details.address = address;
  
  {/* Personal Details */}


  {/* Education */}

    const [education, setEducation] = useState([]);
    const [currentStateEd, setcurrentStateEd] = useState("notEditing");
    /* Editing:educ.id, notEditing */ 

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

  {/* Education */}



  return <div className='flex'>
    <form>
      <PersonalDetails 
        nameUpdater={setNewName}
        emailUpdater={setNewEmail}
        numberUpdater={setNewNumber}
        addressUpdater={setNewAddress}
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
