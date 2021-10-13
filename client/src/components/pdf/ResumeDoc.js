import React from "react";
import { Page, Text, View, Document, Font } from "@react-pdf/renderer";

const ResumeDoc = ({ styles, resume, accOrder }) => {
  const renderDataInOrder = () => {
    return accOrder.map((element) => {
      switch (element) {
        case "personal":
          return personal();
        case "profile":
          return profile();
        default:
          return null;
      }
    });
  };

  const personal = () => {
    return (
      <View style={styles.personal}>
        <Text style={styles.name}>{resume.personal.name}</Text>

        <View style={styles.details}>
          <Text style={styles.subDetail}> {resume.personal.address}</Text>
          <Text style={styles.subDetail}> {resume.personal.phone}</Text>
          <Text style={styles.subDetail}>{resume.personal.email}</Text>
        </View>
        <View style={styles.hr}></View>
        <Text style={styles.text}></Text>
      </View>
    );
  };

  const profile = () => {
    return (
      <View style={styles.profile}>
        <Text>{resume.profile}</Text>
        <View style={styles.hr}></View>
      </View>
    );
  };
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        {/* <Text style={styles.header}></Text> */}
        {/* personal */}

        {renderDataInOrder()}
        <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
          D. Quijote de la Mancha
        </Text>
        <Text style={styles.text}>sxdcg</Text>
        <Text style={styles.text}>
          Es, pues, de saber, que este sobredicho hidalgo, los ratos que estaba
          ocioso (que eran los
        </Text>
        <Text style={styles.text}>
          Con estas y semejantes razones perdía el pobre caballero el juicio, y
          desvelábase psjhdsgdfusvdkjfbskjdb
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
export default ResumeDoc;
