import { useState } from 'react';
import { PersonalDetails } from './components/PersonalDetails';
import { Button } from './components/Button';
import { Label } from './components/Label';

let details = {
  name: '',
  email: '',
  number: '',
  address: '',
  education: []
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
  const [isTabOpen, setTab] = useState('Close');
  const [isAddButtonHidden, setButton] = useState(false);

  details.name = name;
  details.email = email;
  details.number = number;
  details.address = address;
  details.education = education;

  console.log(details)

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

  return (
    <div className="flex">
      <form>
        <PersonalDetails
          nameUpdater={(e) => setName(e.target.value)}
          emailUpdater={(e) => setEmail(e.target.value)}
          numberUpdater={(e) => setNumber(e.target.value)}
          addressUpdater={(e) => setAddress(e.target.value)}
        />

        <fieldset>
          <legend>Education</legend>
          {education.map((ed) => (
            <div key={ed.id}>
              {/* Show editable fields if the tab is open for this ID */}
              {isTabOpen === 'Open:' + ed.id && (
                <div>
                  <Label
                    name="School"
                    callback={(e) => setField(e, ed.id, 'school')}
                    type="text"
                    id="educSchool"
                    value={ed.school || ''}
                  />
                  <Label
                    name="Degree"
                    callback={(e) => setField(e, ed.id, 'degree')}
                    type="text"
                    id="educDegree"
                    value={ed.degree || ''}
                  />
                  <Label
                    name="Start Date"
                    callback={(e) => setField(e, ed.id, 'startDate')}
                    type="date"
                    id="educStartDate"
                    value={ed.startDate || ''}
                  />
                  <Label
                    name="End Date"
                    callback={(e) => setField(e, ed.id, 'endDate')}
                    type="date"
                    id="educEndDate"
                    value={ed.endDate || ''}
                  />
                  <Label
                    name="Location"
                    callback={(e) => setField(e, ed.id, 'location')}
                    type="text"
                    id="educLocation"
                    value={ed.location || ''}
                  />
                  <Button callback={(e) => {
                    closeTab(e)
                    setButton(false);                    
                    }}>
                      Done
                    </Button>
                </div>
              )}
              {/* Show a button to open the tab if it's closed */}
              {isTabOpen !== 'Open:' + ed.id && (
                <Button callback={(e) => {
                  openTab(e, ed.id);
                  setButton(true);
                  }}>
                  {ed.school || 'Edit Education'}
                </Button>
              )}
            </div>
          ))}

          {!isAddButtonHidden && (
            <Button
              callback={(e) => {
                const newID = generateRandomkey();
                setNewEducation(e, newID);
                setButton(true);
                openTab(e, newID);
              }}
            >
              Add
            </Button>
          )}
        </fieldset>
      </form>

      <div>
        {/* Display personal details */}
        <h1>{details.name}</h1>
        <h1>{details.email}</h1>
        <h1>{details.number}</h1>
        <h1>{details.address}</h1>
      </div>
    </div>
  );
}

export default App;
