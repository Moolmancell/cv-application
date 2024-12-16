import { useState } from 'react';
import { PersonalDetails } from './components/PersonalDetails';
import { EducationDetails} from './components/EducationDetails';
import { ExperienceDetails } from './components/ExperienceDetails';
import { Button } from './components/Button';
import { Label } from './components/Label';

let details = {
  name: '',
  email: '',
  number: '',
  address: '',
  education: [],
  experience: []
};

function generateRandomkey() {
  return crypto.randomUUID();
}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [isTabOpen, setTab] = useState('Close');
  const [isTabOpenExp, setTabExp] = useState('Close');

  const [isAddButtonHidden, setButton] = useState(false);
  const [isAddButtonHiddenEXP, setButtonEXP] = useState(false);


  details.name = name;
  details.email = email;
  details.number = number;
  details.address = address;
  details.education = education;
  details.experience = experience;

  console.log(details)
  console.log(isTabOpen)

  //Education

  function setNewEducation(e, ID) {
    e.preventDefault();

    let newEducation = {
      id: ID,
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    };

    setEducation((prev) => [...prev, newEducation]);
  }

  function deleteEducation(e, id) {
    e.preventDefault();
    setEducation((prev) => prev.filter((ed) => ed.id !== id));
  }

  function setField(e, id, field) {
    setEducation((prevEducation) =>
      prevEducation.map((ed) =>
        ed.id === id ? { ...ed, [field]: e.target.value } : ed
      )
    );
  }

  function openTab(e, id) {
    e.preventDefault();
    setTab('Open:' + id);
  }

  function closeTab(e) {
    e.preventDefault();
    setTab('Close');
  }

  //Experience

  function setNewExperience(e, ID) {
    e.preventDefault();

    let newExperience = {
      id: ID,
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    };

    setExperience((prev) => [...prev, newExperience]);
  }

  function deleteExperience(e, id) {
    e.preventDefault();
    setExperience((prev) => prev.filter((ex) => ex.id !== id));
  }

  function setFieldExp(e, id, field) {
    setExperience((prevExperience) =>
      prevExperience.map((ex) =>
        ex.id === id ? { ...ex, [field]: e.target.value } : ex
      )
    );
  }

  function openTabExp(e, id) {
    e.preventDefault();
    setTabExp('Open:' + id);
  }

  function closeTabExp(e) {
    e.preventDefault();
    setTabExp('Close');
  }

  return (
    <div className="flex">
      <form>
        <PersonalDetails
          nameUpdater={(e) => setName(e.target.value)}
          emailUpdater={(e) => setEmail(e.target.value)}
          numberUpdater={(e) => setNumber(e.target.value)}
          addressUpdater={(e) => setAddress(e.target.value)}
        />

        <EducationDetails
          education={education}
          isTabOpen={isTabOpen}
          isAddButtonHidden={isAddButtonHidden}
          setField={setField}
          openTab={openTab}
          closeTab={closeTab}
          setNewEducation={setNewEducation}
          setButton={setButton}
          generateRandomkey={generateRandomkey}
          deleteEducation={deleteEducation}
        />
        
        <ExperienceDetails
          experience={experience}
          isTabOpenExp={isTabOpenExp}
          isAddButtonHiddenEXP={isAddButtonHiddenEXP}
          setFieldExp={setFieldExp}
          openTabExp={openTabExp}
          closeTabExp={closeTabExp}
          setNewExperience={setNewExperience}
          setButtonEXP={setButtonEXP}
          generateRandomkey={generateRandomkey}
          deleteExperience={deleteExperience}
        />

      </form>

      <div>
        <h1>{details.name}</h1>
        <h1>{details.email}</h1>
        <h1>{details.number}</h1>
        <h1>{details.address}</h1>
      </div>
    </div>
  );
}

export default App;
