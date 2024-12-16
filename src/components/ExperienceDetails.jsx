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
    <fieldset>
      <legend>Experience</legend>
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
                  className="border-solid border-2 border-black block"
                />
              </label>
              
              <Button
                callback={(e) => {
                  closeTabExp(e);
                  setButtonEXP(false);
                }}
              >
                Done
              </Button>
              <Button
                callback={(e) => {
                  closeTabExp(e);
                  setButtonEXP(false);
                  deleteExperience(e, exp.id);
                }}
              >
                Delete
              </Button>
            </div>
          )}
          {isTabOpenExp === 'Close' && (
            <Button
              callback={(e) => {
                openTabExp(e, exp.id);
                setButtonEXP(true);
              }}
            >
              {exp.companyName || 'Edit Experience'}
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
        >
          Add
        </Button>
      )}
    </fieldset>
  );
}
