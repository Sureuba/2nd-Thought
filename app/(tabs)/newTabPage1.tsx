// // app/tabs/newTabPage1.tsx
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { ThemedView } from '@/components/ThemedView'; // Correct Import
// import { ThemedText } from '@/components/ThemedText'; // Correct Import

// export default function NewTabPage1() {
//   return (
//     <ThemedView style={styles.container}>
//       <ThemedText type="title">New Tab Page 1</ThemedText>
//       {/* Add your content here */}
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// app/(tabs)/newTabPage1.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Page1() {
  console.log('Page1 Rendered'); // Debugging log

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Page 1</Text>
      <Text style={styles.subtitle}>
        This is Page 1. Customize this page with your own content and styles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen
    backgroundColor: '#f0e68c', // Khaki background color
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    padding: 20, // Adds padding around content
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#556b2f', // Dark Olive Green text
    marginBottom: 10, // Space below the title
  },
  subtitle: {
    fontSize: 18,
    color: '#2f4f4f', // Dark Slate Gray text
    textAlign: 'center', // Centers text
  },
});
