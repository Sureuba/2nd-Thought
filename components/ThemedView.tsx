// components/themedView.tsx
import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export const ThemedView: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
