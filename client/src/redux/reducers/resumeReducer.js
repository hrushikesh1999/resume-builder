import * as t from "../actions/types";
var INITIAL_STATE = {
  personal: {},
  profile: "",
  education: [],
  work: [],
  skills: [],
  projects: [],
  certifications: [],
};
const resumeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.UPDATE_PERSONAL:
      return { ...state, personal: action.payload };
    case t.UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    //education
    case t.ADD_EDUCATION:
      let indexOfEducation = state.education.findIndex(
        (element) => element.key === action.payload.key
      );
      if (indexOfEducation === -1) {
        return { ...state, education: [...state.education, action.payload] };
      } else {
        let tempStateE = state.education;
        tempStateE.splice(indexOfEducation, 1, action.payload);
        return { ...state, education: tempStateE };
      }
    case t.DELETE_EDUCATION:
      let tempOfEducation = state.education;
      tempOfEducation.splice(action.payload, 1);
      return { ...state, education: tempOfEducation };
    //work
    case t.ADD_WORK:
      let indexOfWork = state.work.findIndex(
        (element) => element.key === action.payload.key
      );
      if (indexOfWork === -1) {
        return { ...state, work: [...state.work, action.payload] };
      } else {
        let tempStateE = state.work;
        tempStateE.splice(indexOfWork, 1, action.payload);
        return { ...state, work: tempStateE };
      }
    case t.DELETE_WORK:
      let tempOfWork = state.work;
      tempOfWork.splice(action.payload, 1);
      return { ...state, work: tempOfWork };
    //skill
    case t.ADD_SKILL:
      let indexOfSkills = state.skills.findIndex(
        (element) => element.key === action.payload.key
      );
      if (indexOfSkills === -1) {
        return { ...state, skills: [...state.skills, action.payload] };
      } else {
        let tempStateS = state.skills;
        tempStateS.splice(indexOfSkills, 1, action.payload);
        return { ...state, skills: tempStateS };
      }
    case t.DELETE_SKILL:
      let tempOfSkill = state.skills;
      tempOfSkill.splice(action.payload, 1);
      return { ...state, skills: tempOfSkill };
    //project
    case t.ADD_PROJECT:
      let indexOfProject = state.projects.findIndex(
        (element) => element.key === action.payload.key
      );
      if (indexOfProject === -1) {
        return { ...state, projects: [...state.projects, action.payload] };
      } else {
        let tempStateP = state.projects;
        tempStateP.splice(indexOfProject, 1, action.payload);
        return { ...state, projects: tempStateP };
      }
    case t.DELETE_PROJECT:
      let tempOfProject = state.projects;
      tempOfProject.splice(action.payload, 1);
      return { ...state, projects: tempOfProject };
    //certifications
    case t.ADD_CERTIFICATION:
      let indexOfCertification = state.certifications.findIndex(
        (element) => element.key === action.payload.key
      );
      if (indexOfCertification === -1) {
        return {
          ...state,
          certifications: [...state.certifications, action.payload],
        };
      } else {
        let tempStateC = state.certifications;
        tempStateC.splice(indexOfCertification, 1, action.payload);
        return { ...state, certifications: tempStateC };
      }
    case t.DELETE_CERTIFICATION:
      let tempOfCertification = state.certifications;
      tempOfCertification.splice(action.payload, 1);
      return { ...state, certifications: tempOfCertification };

    //api
    case t.CREATE_RESUME:
      return { ...state, ...action.payload.resume };
    case t.FETCH_RESUME:
      return { ...state, ...action.payload.resume };
    default:
      return state;
  }
};

export default resumeReducer;
