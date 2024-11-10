// app/(tabs)/newTabPage2.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Page2() {
  console.log('Page2 Rendered'); // Debugging log

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Page 2</Text>
      <Text style={styles.subtitle}>
        This is Page 2. Feel free to add interactive elements and custom styles here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen
    backgroundColor: '#e6e6fa', // Lavender background color
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    padding: 20, // Adds padding around content
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4b0082', // Indigo text
    marginBottom: 10, // Space below the title
  },
  subtitle: {
    fontSize: 18,
    color: '#2f4f4f', // Dark Slate Gray text
    textAlign: 'center', // Centers text
  },
});
