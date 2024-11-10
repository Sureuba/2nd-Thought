// app/standalonePage1.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Correct Import
import { ThemedText } from '@/components/ThemedText'; // Correct Import

export default function StandalonePage1() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Standalone Page 1</ThemedText>
      {/* Add your content here */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
