// components/ExternalLink.tsx
import React from 'react';
import { Linking, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link, Href } from 'expo-router';

interface ExternalLinkProps {
  href: string; // External URL as a string
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    // Open external links using Linking
    const handlePress = () => {
      Linking.openURL(href).catch((err) => console.error("Couldn't load page", err));
    };

    return (
      <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
        <Text style={styles.linkText}>{children}</Text>
      </TouchableOpacity>
    );
  }

  // For internal links, use expo-router's Link component
  return (
    <Link href={href as Href<string>} style={styles.linkContainer}>
      {children}
    </Link>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    padding: 8,
    marginVertical: 4,
  },
  linkText: {
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
});
