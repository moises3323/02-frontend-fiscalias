import pdf from '@react-pdf/renderer';
const { Text, View, StyleSheet, Document, Page, PDFDownloadLink, Image } = pdf;

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 24,
  },
  section: {
    flexDirection: 'row',
  },
  head: {
    marginTop: '24px',
    borderBottom: '1px solid #515056',
    height: '25px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cells: {
    marginTop: '16px',
    borderBottom: '1px solid #515056',
    height: 'auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    paddingBottom: '8px',
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 200,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const TableHead = () => (
  <>
    <View style={styles.head}>
      <Text>Fiscalia</Text>
    </View>
    <View style={styles.head}>
      <Text>Dirección</Text>
    </View>
    <View style={styles.head}>
      <Text>Estado</Text>
    </View>
  </>
);

const TableRow = ({ nombre, direccion, estado }) => (
  <View style={styles.section}>
    <View style={styles.cells}>
      <Text>{nombre}</Text>
    </View>
    <View style={styles.cells}>
      <Text>{direccion}</Text>
    </View>
    <View style={styles.cells}>
      <Text>{estado}</Text>
    </View>
  </View>
);

const ReportePdf = ({ rows }) => {
  return (
    <PDFDownloadLink
      style={{ textDecoration: 'auto', color: 'black' }}
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <Image style={styles.image} src="/img/MP_logo.png" />
            <View style={styles.section}>
              <TableHead />
            </View>
            {rows.map((row, index) => (
              <TableRow {...row} key={index} />
            ))}
            <Text style={styles.pageNumber} fixed>
              Fiscalia de la mujer | Gerona Zona 1 Guatemala | Tel: 5656-3527
            </Text>
          </Page>
        </Document>
      }
      fileName="Reporte_Fiscalías.pdf"
    >
      {({ loading }) => (loading ? 'Descargando...' : 'Descargar reporte')}
    </PDFDownloadLink>
  );
};

export default ReportePdf;
