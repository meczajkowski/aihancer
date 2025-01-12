import { CVData } from '@/schemas/classicCvTemplateSchema';
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: '/fonts/Inter-Regular.ttf',
    },
    {
      src: '/fonts/Inter-SemiBold.ttf',
      fontWeight: 600,
    },
    {
      src: '/fonts/Inter-Bold.ttf',
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    padding: 30,
    flexDirection: 'row',
  },
  leftColumn: {
    width: '40%',
    paddingRight: 15,
  },
  rightColumn: {
    width: '60%',
    paddingTop: 5,
    paddingLeft: 15,
  },
  section: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '180%',
    letterSpacing: '-0.3px',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
    color: '#474F53',
  },
  positionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 20,
    fontStyle: 'normal',
    lineHeight: '100%',
    letterSpacing: '-1',
  },
});

export const PDFDocument = ({ data }: { data: CVData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.section}>
          <Text style={styles.title}>Contact</Text>
          {data.contact.map((item, i) => (
            <Text key={i} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Find Me</Text>
          {data.findMe.map((item, i) => (
            <Text key={i} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          {data.skills.map((item, i) => (
            <Text key={i} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Technologies</Text>
          {data.technologies.map((item, i) => (
            <Text key={i} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>disclaimer</Text>
          <Text
            style={styles.text}
          >{`I hereby consent to my personal data being processed by ${data.disclaimer.companyName} for the purpose of considering my application for the vacancy advertised under reference number ${data.disclaimer.referenceNumber}`}</Text>
        </View>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.section}>
          <Text style={[styles.text, { fontSize: 15 }]}>
            {data.positionTitle}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>About Me</Text>
          <Text style={styles.text}>{data.aboutMe}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Experience</Text>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.section}>
              <Text style={styles.text}>{exp.companyName}</Text>
              <View style={styles.positionContainer}>
                <Text
                  style={[
                    styles.text,
                    { fontWeight: 600, fontSize: '15px', color: '#000' },
                  ]}
                >
                  {exp.positionName}
                </Text>
                <Text style={styles.text}>{exp.date}</Text>
              </View>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
        </View>
        {data.education && data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.title}>Education</Text>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.section}>
                <Text style={styles.text}>{edu?.schoolName}</Text>
                <View style={styles.positionContainer}>
                  <Text
                    style={[
                      styles.text,
                      { fontWeight: 600, fontSize: '15px', color: '#000' },
                    ]}
                  >
                    {edu?.studyName}
                  </Text>
                  <Text style={styles.text}>{edu?.year}</Text>
                </View>
                <Text style={styles.text}>{edu?.degree}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Page>
  </Document>
);
