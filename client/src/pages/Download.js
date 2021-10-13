import React from "react";
import { useSelector } from "react-redux";
import { PDFViewer } from "@react-pdf/renderer";
import ResumeDoc from "../components/pdf/ResumeDoc";
import { StyleSheet } from "@react-pdf/renderer";
import { temp1 } from "../cssForTemplates/temp1";
import { temp2 } from "../cssForTemplates/temp2";
import SubHeader from "../components/header/SubHeader";

const Download = () => {
  const template = useSelector((state) => state.template);
  const resume = useSelector((state) => state.resume);
  const accOrder = useSelector((state) => state.accOrder);

  const selectTemplate = () => {
    switch (template) {
      case "temp1":
        return temp1;
      case "temp2":
        return temp2;
      default:
        return temp1;
    }
  };
  const styles = StyleSheet.create(selectTemplate());

  return (
    <div>
      <SubHeader />
      <PDFViewer height="847" width="100%">
        <ResumeDoc
          styles={styles}
          resume={resume}
          accOrder={accOrder}
        ></ResumeDoc>
      </PDFViewer>
    </div>
  );
};

export default Download;
