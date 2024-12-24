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
      <form className='flex-none'>
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

      {/* Print Button */}
      <div className="flex justify-center mt-8 no-print">
          <button onClick={() => {}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Print / Save as PDF</button>
      </div>

      </form>      

      <div id='resume-template' className="max-w-4xl mx-auto p-8 bg-white shadow-lg mt-10">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
                <h1 className="text-4xl font-bold">{details.name || <i className='text-slate-500'>Name</i>}</h1>
                <p className="text-lg text-gray-600">{details.email || <i className='text-slate-500'>Email</i>}</p>
                <p className="text-lg text-gray-600">{details.number || <i className='text-slate-500'>Phone No.</i>}</p>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-500">{details.address || <i className='text-slate-500'>Address</i>}</p>
            </div>
        </div>

        {/*Education Section*/}
        <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
            {details.education.map((ed) => {
              return <div className="mb-6" key={ed.key}>
              <p className="text-sm text-gray-600">{new Date(ed.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) || <i className='text-slate-500'>Start Date</i>}-{new Date(ed.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) || <i className='text-slate-500'>End Date</i>}</p>
              <p className="text-lg font-bold">{ed.degree || <i className='text-slate-500'>Degree</i>}</p>
              <p className="text-sm text-gray-600">{ed.school || <i className='text-slate-500'>University</i>}</p>
              <p className="text-sm text-gray-600">{ed.location || <i className='text-slate-500'>Location</i>}</p>
            </div>
            })}
        </section>

        {/* Work Experience*/}
        <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Work Experience</h2>
            {details.experience.map((exp) => {
              return <div className="mb-6" key={exp.id}>
              <p className="text-lg font-bold">{exp.position || <i className='text-slate-500'>Work Position</i>} | {exp.companyName || <i className='text-slate-500'>Company</i>}</p>
              <p className="text-sm text-gray-600">{new Date(exp.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) || <i className='text-slate-500'>Start Date</i>}-{new Date(exp.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) || <i className='text-slate-500'>End Date</i>}</p>
              <p className="text-sm text-gray-600">{exp.location || <i className='text-slate-500'>Location</i>}</p>
              <p className="list-disc pl-5 space-y-1 text-sm text-gray-700">{exp.description || <i className='text-slate-500'>Description</i>}</p>
          </div>
            })}
        </section>

    </div>

    </div>
  );
}

export default App;
