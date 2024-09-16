"use client"

import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image as Img } from '@react-pdf/renderer';
import { Button } from './ui/button';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: "green"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

const PDFDocument = ({ paymentDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Payment Successful</Text>
      {paymentDetails.map((detail, index) => (
        <View style={styles.row} key={index}>
          <Text style={styles.label}>{detail.label}:</Text>
          <Text style={styles.value}>{detail.value}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const PDFDownloadButton = ({ paymentDetails }) => (
  <PDFDownloadLink
    document={<PDFDocument paymentDetails={paymentDetails} />}
    fileName="payment_details.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : <Button className="rounded bg-green-600">Download</Button>
    }
  </PDFDownloadLink>
);

export default PDFDownloadButton;