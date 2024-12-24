import React from 'react';
import { Button } from './Button';
import { Label } from './Label';

export const EducationDetails = ({
  education,
  isTabOpen,
  isAddButtonHidden,
  setField,
  openTab,
  closeTab,
  setNewEducation,
  setButton,
  generateRandomkey,
  deleteEducation
}) => {
  return (
    <fieldset className='border border-gray-200 p-5 pt-0 rounded-lg shadow-md mb-4 bg-gray-50'>
      <legend className='mb-3 text-lg font-bold text-slate-600'>Education</legend>
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

              <div className='flex justify-between'>
              <Button
                callback={(e) => {
                  closeTab(e);
                  setButton(false);
                  deleteEducation(e, ed.id);
                }}
                classes={"delete-button"}
              >
                Delete
              </Button>
              <Button
                callback={(e) => {
                  closeTab(e);
                  setButton(false);
                }}
                classes={"done-button"}
              >
                Done
              </Button>
              </div>

            </div>
          )}
          {isTabOpen === 'Close' && (
            <Button
              callback={(e) => {
                openTab(e, ed.id);
                setButton(true);
              }}
              classes={"tabs"}
            >
              {ed.school || <i className='text-gray-500'>Edit Education</i>}
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
          classes={"add-button"}
        >
          Add
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>

        </Button>
      )}
    </fieldset>
  );
};
