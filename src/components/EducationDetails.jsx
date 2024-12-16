import React from 'react';
import { Button } from './Button';
import { Label } from './Label';

export const EducationSection = ({
  education,
  isTabOpen,
  isAddButtonHidden,
  setField,
  openTab,
  closeTab,
  setNewEducation,
  setButton,
  generateRandomkey
}) => {
  return (
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
              <Button
                callback={(e) => {
                  closeTab(e);
                  setButton(false);
                }}
              >
                Done
              </Button>
            </div>
          )}
          {isTabOpen !== 'Open:' + ed.id && (
            <Button
              callback={(e) => {
                openTab(e, ed.id);
                setButton(true);
              }}
            >
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
  );
};
