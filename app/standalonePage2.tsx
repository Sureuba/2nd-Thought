// app/standalonePage2.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Correct Import
import { ThemedText } from '@/components/ThemedText'; // Correct Import

export default function StandalonePage2() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Standalone Page 2</ThemedText>
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
