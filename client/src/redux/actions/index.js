import * as t from "./types";
import axios from "axios";
import history from "../../history";

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

export const addWorkData = (workData) => {
  return {
    type: t.ADD_WORK,
    payload: workData,
  };
};

export const deleteWorkData = (index) => {
  return {
    type: t.DELETE_WORK,
    payload: index,
  };
};

export const addSkillData = (skillData) => {
  return {
    type: t.ADD_SKILL,
    payload: skillData,
  };
};

export const deleteSkillData = (index) => {
  return {
    type: t.DELETE_SKILL,
    payload: index,
  };
};

export const addProjectData = (projectData) => {
  return {
    type: t.ADD_PROJECT,
    payload: projectData,
  };
};

export const deleteProjectData = (index) => {
  return {
    type: t.DELETE_PROJECT,
    payload: index,
  };
};

export const addCertificationData = (certificationData) => {
  return {
    type: t.ADD_CERTIFICATION,
    payload: certificationData,
  };
};

export const deleteCertificationData = (index) => {
  return {
    type: t.DELETE_CERTIFICATION,
    payload: index,
  };
};

//api
export const createResume = () => async (dispatch, getState) => {
  const { resume } = getState();
  const response = await axios.post("/api/resumes", {
    resume,
  });
  dispatch({ type: t.CREATE_RESUME, payload: response.data });
};

export const fetchResume = (userId) => async (dispatch) => {
  const response = await axios.get(`/api/resumes/${userId}`);
  dispatch({ type: t.FETCH_RESUME, payload: response.data });
};

//template
export const setTemplate = (template) => {
  return {
    type: t.SET_TEMPLATE,
    payload: template,
  };
};

//accOrder
export const setOrder = (accOrder) => {
  return {
    type: t.SET_ORDER,
    payload: accOrder,
  };
};

//isDownloadVisible
export const setDownloadVisible = (boolValue) => {
  return {
    type: t.SET_DOWNLOAD_VISIBLE,
    payload: boolValue,
  };
};
