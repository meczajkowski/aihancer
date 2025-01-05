import { CVData } from '@/schemas/classicCvTemplateSchema';
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
});
Font.register({
  family: 'Inter',
  src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-ext-400-normal.ttf',
});

const styles = StyleSheet.create({
  page: {
    // fontFamily: 'Open Sans',
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
    paddingLeft: 15,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 20,
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
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.section}>
          <Text style={styles.text}>{data.positionTitle}</Text>
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
              <Text style={[styles.text, { fontWeight: 600 }]}>
                {exp.positionName}
              </Text>
              <Text style={styles.text}>{exp.date}</Text>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
