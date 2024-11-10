// app/(tabs)/explore.tsx
import React from 'react';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <View style={styles.headerIconContainer}>
          <Ionicons size={310} name="code-slash" color="#808080" />
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText style={styles.contentText}>
        Discover various features and components of this app.
      </ThemedText>

      <Collapsible title="File-based Routing">
        <ThemedText>
          This app has multiple screens organized with file-based routing.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Android, iOS, and Web Support">
        <ThemedText>
          You can run this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>
          Static images can use <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes for different screen densities.
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.image} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Custom Fonts">
        <ThemedText>
          Learn how to load custom fonts in <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and Dark Mode Components">
        <ThemedText>
          This app supports light and dark modes. Use the{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook to adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animations">
        <ThemedText>
          Experience animations with the{' '}
          <ThemedText type="defaultSemiBold">HelloWave.tsx</ThemedText> component using{' '}
          <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">ParallaxScrollView.tsx</ThemedText> component provides a parallax effect.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerIconContainer: {
    position: 'absolute',
    bottom: -90,
    left: -35,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
  },
  contentText: {
    marginTop: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
