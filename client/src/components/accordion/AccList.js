import PersonalDetails from "./AccDetails/PersonalDetails";
import Profile from "./AccDetails/Profile";
import FormWrapper from "./AccDetails/FormWrapper";
import EducationForm from "./AccDetails/EducationForm";
import WorkForm from "./AccDetails/WorkForm";
import SkillForm from "./AccDetails/SkillForm";
import ProjectForm from "./AccDetails/ProjectForm";
import CertificationForm from "./AccDetails/CertificationForm";
//delete actions
import {
  deleteEducationData,
  deleteWorkData,
  deleteSkillData,
  deleteProjectData,
  deleteCertificationData,
} from "../../redux/actions";

export const AccList = [
  {
    summary: "Personal Details",
    panel: "panel1",
    Component: PersonalDetails,
  },
  {
    summary: "Profile",
    panel: "panel2",
    Component: Profile,
  },
  {
    summary: "Education",
    panel: "panel3",
    Component: FormWrapper,
    FormComponent: EducationForm,
    deleteAction: deleteEducationData,
  },
  {
    summary: "Work Experience",
    panel: "panel4",
    Component: FormWrapper,
    FormComponent: WorkForm,
    deleteAction: deleteWorkData,
  },
  {
    summary: "Skills",
    panel: "panel5",
    Component: FormWrapper,
    FormComponent: SkillForm,
    deleteAction: deleteSkillData,
  },
  {
    summary: "Projects",
    panel: "panel6",
    Component: FormWrapper,
    FormComponent: ProjectForm,
    deleteAction: deleteProjectData,
  },
  {
    summary: "Certifications",
    panel: "panel7",
    Component: FormWrapper,
    FormComponent: CertificationForm,
    deleteAction: deleteCertificationData,
  },
];
