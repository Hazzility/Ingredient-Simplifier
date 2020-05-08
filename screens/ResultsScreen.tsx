import React, { FC } from 'react';
import { Text, View, StyleSheet, TextStyle } from 'react-native';

interface StringToString { [key: string]: string }

// the given sample data
const lookupTable: StringToString = {
  'high fructose corn syrup': 'sugar',
  'maltodextrin': 'sugar',
  'dextrose': 'sugar',
};

// an interface just defines the types of input that TableItem needs
interface TableItemProps {
  val: string;
  textStyle: TextStyle;
}

// this is a styled component (i.e. a reusable "helper function" for our code later on)
const TableItem: FC<TableItemProps> = ({ val, textStyle }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'stretch',
      padding: 10,
      borderWidth: 0.5,
      borderColor: '#858D99',
    }}
  >
    {/* We need to wrap this <Text> in a <View>, because Text is not flexible */}
    <Text style={textStyle}>{val}</Text>
  </View>
);

export default function ResultsScreen({ navigation }) {
  
  const myData: StringToString = {};
  navigation.getParam('ingredients', []).forEach((ingr) => {
    if(lookupTable[ingr]) {
      myData[ingr] = lookupTable[ingr];
    } else {
      myData[ingr] = '???';
    }
  });

  // this defines an array of containers, each container representing a row
  const myRows = Object.entries(myData).map(([key, value], idx) => (
    <View style={styles.row} key={idx}>
      <TableItem val={key} textStyle={styles.rowItem} />
      <TableItem val={value} textStyle={styles.rowItem} />
    </View>
  ));

  if(!navigation.getParam('ingredients', false)) {
    return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 50
    }}>
      <Text style={styles.errorText}>You haven't entered any ingredients yet!</Text>
      <Text style={styles.errorText}>Go to the Camera tab or the Input tab to start analyzing ingredients.</Text>
    </View>);
  }

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {/* the first row represents the header row */}
        <View style={styles.row}>
          <TableItem val="Original" textStyle={styles.tableHeader} />
          <TableItem
            val="Simplified"
            textStyle={styles.tableHeader}
          />
        </View>

        { myRows /* all of our data is included here */ }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  table: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  rowItem: {},
  tableHeader: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  }
});