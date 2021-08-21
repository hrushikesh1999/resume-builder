import PersonalDetails from "./AccDetails/PersonalDetails";
import Profile from "./AccDetails/Profile";
import Education from "./AccDetails/education/Education";
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
    Component: Education,
  },
  {
    summary: "Work Experience",
    panel: "panel4",
    Component: PersonalDetails,
  },
  {
    summary: "Skills",
    panel: "panel5",
    Component: PersonalDetails,
  },
  {
    summary: "Projects",
    panel: "panel6",
    Component: PersonalDetails,
  },
  {
    summary: "Certifications",
    panel: "panel7",
    Component: PersonalDetails,
  },
  {
    summary: "Strengths",
    panel: "panel8",
    Component: PersonalDetails,
  },
];
