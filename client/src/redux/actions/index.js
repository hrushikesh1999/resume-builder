import * as t from "./types";

export const updatePersonalData = (personalData) => {
  return {
    type: t.UPDATE_PERSONAL,
    payload: personalData,
  };
};

export const updateProfileData = (profileData) => {
  return {
    type: t.UPDATE_PROFILE,
    payload: profileData,
  };
};

export const addEducationData = (educationData) => {
  return {
    type: t.ADD_EDUCATION,
    payload: educationData,
  };
};

export const deleteEducationData = (index) => {
  return {
    type: t.DELETE_EDUCATION,
    payload: index,
  };
};
