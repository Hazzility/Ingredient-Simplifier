import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={{
        flex: 2,
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Ingredient Simplifier</Text>
      </View>
      <View style={{
        flex: 8,
        alignItems: 'flex-start'
      }}>
        <Text style={styles.regularText}>This is an app that converts complicated words like "Dextrose" and "High Fructose Corn Syrup" into simple words like "sugar".</Text>
        <View style={{height: 20}} />
        
        <Text style={styles.regularText}>Built with:</Text>
        <FlatList
          data={['React Native', 'Typescript']}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', padding: 10}}>
              <Text style={styles.regularText}>{'\u2705'}</Text>
              <Text style={{paddingLeft: 5, ...styles.regularText}}>{item}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <View style={{
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <Text style={styles.regularText}>
          by Anzhou Hou
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  regularText: {
    fontSize: 18
  }
});