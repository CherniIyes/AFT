import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Pressable, Modal, Button, } from 'react-native';
import { PDFDocument, rgb, StandardFonts } from 'react-native-pdf-lib';
// import RNFS from 'react-native-fs';


const Wallet = () => {
      const [allAftData, setAllAftData] = useState([]);
      const [expensesData, setExpensesData] = useState([]);
      const [tableData, setTableData] = useState([]);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const aftResponse = await axios.get('http://192.168.13.177:6464/sales/getAll')
                        setAllAftData(aftResponse.data);

                        const expensesResponse = await axios.get('http://192.168.13.177:6464/exp/getall');
                        setExpensesData(expensesResponse.data);

                        const tableResponse = await axios.get('http://192.168.13.177:6464/milk');
                        setTableData(tableResponse.data);
                  } catch (error) {
                        console.error('Error fetching data:', error.message);
                  }
            };

            fetchData();
      }, []);

      const generatePDF = async () => {
            try {
                  const pdfDoc = await PDFDocument.create();

                  // Add content to the PDF
                  pdfDoc
                        .createPage()
                        .drawText('Sales Data', { x: 50, y: 750, font: StandardFonts.HelveticaBold })
                        .drawText(JSON.stringify(allAftData), { x: 50, y: 730 })
                        .drawText('Expenses Data', { x: 50, y: 700, font: StandardFonts.HelveticaBold })
                        .drawText(JSON.stringify(expensesData), { x: 50, y: 680 })
                        .drawText('Milk Data', { x: 50, y: 650, font: StandardFonts.HelveticaBold })
                        .drawText(JSON.stringify(tableData), { x: 50, y: 630 });

                  // Get the PDF as a base64 string
                  const pdfBytes = await pdfDoc.save();

                  // For native platforms (iOS/Android)
                  const pdfPath = RNFS.DocumentDirectoryPath + '/wallet_data.pdf';

                  await RNFS.writeFile(pdfPath, pdfBytes, 'base64');
                  console.log('PDF saved successfully at:', pdfPath);
            } catch (error) {
                  console.error('Error generating or saving PDF:', error.message);
            }
      };
      return (
            <View style={styles.container}>
                  {expensesData.length > 0 && (
                        <View style={styles.tableContainer}>
                              <Text style={styles.tableHeader}>Expenses:</Text>
                              <View style={styles.tableRowHeader}>
                                    <Text style={styles.tableCellHeader}>Handwork</Text>
                                    <Text style={styles.tableCellHeader}>Fodder</Text>
                                    <Text style={styles.tableCellHeader}>Bills</Text>
                                    <Text style={styles.tableCellHeader}>Medical Expenses</Text>
                                    <Text style={styles.tableCellHeader}>Hay</Text>
                                    <Text style={styles.tableCellHeader}>Date</Text>
                              </View>
                              <FlatList
                                    data={expensesData}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                          <View style={styles.tableRow}>
                                                <Text style={styles.tableCell}>{item.handwork}</Text>
                                                <Text style={styles.tableCell}>{item.fodder}</Text>
                                                <Text style={styles.tableCell}>{item.bills}</Text>
                                                <Text style={styles.tableCell}>{item.medicalexpenses}</Text>
                                                <Text style={styles.tableCell}>{item.hay}</Text>
                                                <Text style={styles.tableCell}>{item.date}</Text>
                                          </View>
                                    )}
                              />
                        </View>
                  )}
                  {tableData.length > 0 && (
                        <View style={styles.tableContainer}>
                              <Text style={styles.tableHeader}>Milk:</Text>
                              <View style={styles.tableRowHeader}>
                                    <Text style={styles.tableCellHeader}>Quantity</Text>
                                    <Text style={styles.tableCellHeader}>Price</Text>
                                    <Text style={styles.tableCellHeader}>Date</Text>
                              </View>
                              <FlatList
                                    data={tableData}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                          <View style={styles.tableRow}>
                                                <Text style={styles.tableCell}>{item.quantity}</Text>
                                                <Text style={styles.tableCell}>{item.price}</Text>
                                                <Text style={styles.tableCell}>{item.day}</Text>
                                          </View>
                                    )}
                              />
                        </View>
                  )}
                  {allAftData.length > 0 && (
                        <View style={styles.tableContainer}>
                              <Text style={styles.tableHeader}>Sales:</Text>
                              <View style={styles.tableRowHeader}>
                                    <Text style={styles.tableCellHeader}>Product</Text>
                                    <Text style={styles.tableCellHeader}>Product Description</Text>
                                    <Text style={styles.tableCellHeader}>Price</Text>
                                    <Text style={styles.tableCellHeader}>Date</Text>
                              </View>
                              <FlatList
                                    data={allAftData}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                          <View style={styles.tableRow}>
                                                <Text style={styles.tableCell}>{item.product}</Text>
                                                <Text style={styles.tableCell}>{item.product_details}</Text>
                                                <Text style={styles.tableCell}>{item.price}</Text>
                                                <Text style={styles.tableCell}>{item.date}</Text>
                                          </View>
                                    )}
                              />
                        </View>
                  )}
                  <TouchableOpacity onPress={generatePDF} style={styles.generateButton}>
                        <Text style={styles.generateButtonText}>Generate and Download PDF</Text>
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 20,
      },
      tableContainer: {
            marginVertical: 10,
      },
      tableHeader: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
      },
      tableRowHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
      },
      tableCellHeader: {
            fontWeight: 'bold',
            flex: 1,
            textAlign: 'center',
      },
      tableRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
      },
      tableCell: {
            flex: 1,
            textAlign: 'center',
      },
      generateButton: {
            backgroundColor: '#4CAF50',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
      },
      generateButtonText: {
            color: 'white',
            fontWeight: 'bold',
      },
});

export default Wallet;