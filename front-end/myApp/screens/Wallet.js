import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import { PDFDocument, StandardFonts } from 'react-native-pdf-lib';
// import RNFS from 'react-native-fs';
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/Rstore';
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import * as FileSystem from 'expo-file-system';


const Wallet = () => {
  const user = useRecoilValue(userState);

  const [allAftData, setAllAftData] = useState([]);
  const [expensesData, setExpensesData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expensesResponse = await axios.get(`http://192.168.1.4:6464/exp/getone/${user.id}`);
        setExpensesData(expensesResponse.data);

        const tableResponse = await axios.get(`http://192.168.1.4:6464/milk/getone/${user.id}`);
        setTableData(tableResponse.data);
        const salesResponse = await axios.get(`http://192.168.1.4:6464/sales/getOne/${user.id}`);
        setAllAftData(salesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const generateAndSharePDF = async () => {
    try {
      // Generate HTML content
      const pdfContent = generatePDFContent();
      console.log('Generated PDF content:', pdfContent); // Log generated content

      // Generate temporary HTML file path
      const htmlFilePath = `${FileSystem.documentDirectory}temp.html`;

      // Write HTML content to a temporary HTML file
      await FileSystem.writeAsStringAsync(htmlFilePath, pdfContent);

      // Ensure directory exists or create it
      const directory = `${FileSystem.documentDirectory}PDFs/`;
      const directoryInfo = await FileSystem.getInfoAsync(directory);
      if (!directoryInfo.exists) {
        await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
      }

      // Specify the output PDF file path
      const pdfOutputPath = `${directory}generatedPDF.pdf`;

      // Print HTML file to PDF with specified output path
      await printToFileAsync({ html: htmlFilePath, uri: pdfOutputPath });

      // Share the generated PDF file
      await shareAsync(pdfOutputPath);
    } catch (error) {
      console.error('Error generating PDF:', error.message);
    }
  };

  const generatePDFContent = () => {
    // Generate content for the PDF using expensesData and tableData
    let content = `
      <html>
        <head>
          <title>Expenses and Milk Data</title>
          <style>
            /* Define your CSS styles here */
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h1>Expenses:</h1>
          <table>
            <thead>
              <tr>
                <th>Handwork</th>
                <th>Fodder</th>
                <th>Bills</th>
                <th>Medical Expenses</th>
                <th>Hay</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${expensesData.map(item => `
                <tr>
                  <td>${item.handwork}</td>
                  <td>${item.fodder}</td>
                  <td>${item.bills}</td>
                  <td>${item.medicalexpenses}</td>
                  <td>${item.hay}</td>
                  <td>${item.date}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <h1>Milk Data:</h1>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${tableData.map(item => `
                <tr>
                  <td>${item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.day}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;

    return content;
  };

  return (
    <ScrollView style={styles.ScrollView}>
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
        {/* <TouchableOpacity onPress={generatePDF} style={styles.generateButton}>
        <Text style={styles.generateButtonText}>Generate and Download PDF</Text>
      </TouchableOpacity> */}
        <TouchableOpacity onPress={generateAndSharePDF} style={styles.generateButton}>
          <Text style={styles.generateButtonText}>Generate and Share PDF</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    marginTop: 120,
    marginBottom: 63,
    padding: 16,
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
