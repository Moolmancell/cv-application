import React from 'react';
import { Label } from './Label';
import { Button } from './Button';

export function ExperienceDetails({
  experience,
  isTabOpenExp,
  isAddButtonHiddenEXP,
  setFieldExp,
  openTabExp,
  closeTabExp,
  setNewExperience,
  setButtonEXP,
  generateRandomkey,
  deleteExperience
}) {
  return (
    <fieldset className='border border-gray-200 p-5 pt-0 rounded-lg shadow-md mb-4 bg-gray-50'>
      <legend className='mb-3 text-lg font-bold text-slate-600'>Experience</legend>
      {experience.map((exp) => (
        <div key={exp.id}>
          {isTabOpenExp === 'Open:' + exp.id && (
            <div>
              <Label
                name="Company Name"
                callback={(e) => setFieldExp(e, exp.id, 'companyName')}
                type="text"
                id="expCompanyName"
                value={exp.companyName || ''}
              />
              <Label
                name="Position Title"
                callback={(e) => setFieldExp(e, exp.id, 'position')}
                type="text"
                id="expPosition"
                value={exp.position || ''}
              />
              <Label
                name="Start Date"
                callback={(e) => setFieldExp(e, exp.id, 'startDate')}
                type="date"
                id="expStartDate"
                value={exp.startDate || ''}
              />
              <Label
                name="End Date"
                callback={(e) => setFieldExp(e, exp.id, 'endDate')}
                type="date"
                id="expEndDate"
                value={exp.endDate || ''}
              />
              <Label
                name="Location"
                callback={(e) => setFieldExp(e, exp.id, 'location')}
                type="text"
                id="expLocation"
                value={exp.location || ''}
              />
              <label htmlFor="expDescription" className="block">
                Description
                <textarea
                  id="expDescription"
                  value={exp.description || ''}
                  onChange={(e) => setFieldExp(e, exp.id, 'description')}
                  className="block border-2 focus:ring-2 focus:border-sky-500 focus:outline-none border-slate-400 rounded-lg p-2 mb-4 w-64"
                />
              </label>


              <div className='flex justify-between'>
              <Button
                callback={(e) => {
                  closeTabExp(e);
                  setButtonEXP(false);
                  deleteExperience(e, exp.id);
                }}
                classes={"delete-button"}
              >
                Delete
              </Button>
              <Button
                callback={(e) => {
                  closeTabExp(e);
                  setButtonEXP(false);
                }}
                classes={"done-button"}
              >
                Done
              </Button>
              </div>
              
            </div>
          )}
          {isTabOpenExp === 'Close' && (
            <Button
              callback={(e) => {
                openTabExp(e, exp.id);
                setButtonEXP(true);
              }}
              classes={"tabs"}
            >
              {exp.companyName || <i className='text-gray-500'>Edit Education</i>}
            </Button>
          )}
        </div>
      ))}
      {!isAddButtonHiddenEXP && (
        <Button
          callback={(e) => {
            const newID = generateRandomkey();
            setNewExperience(e, newID);
            setButtonEXP(true);
            openTabExp(e, newID);
          }}
          classes={"add-button"}
        >
          Add
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </Button>
      )}
    </fieldset>
  );
}
