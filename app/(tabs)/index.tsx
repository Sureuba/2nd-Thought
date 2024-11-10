// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
// app/(tabs)/index.tsx
// app/(tabs)/index.tsx

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// Uncomment the following lines if you plan to add navigation in the future
// import { useRouter } from 'expo-router';

export default function HomeScreen() {
  // Uncomment the following line if you plan to use navigation
  // const router = useRouter();

  // Handler for Sign-In button press
  const handleSignIn = () => {
    // Placeholder for sign-in logic
    Alert.alert('Sign-In', 'Sign-In button pressed');
    // Example navigation:
    // router.push('/dashboard');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Title */}
          <Text style={styles.title}>Welcome to AddictionProject</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Please sign in to continue and access all features.
          </Text>

          {/* <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
          /> */}

          

          {/* Password Input */}
          {/* <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
          /> */}

          {/* Sign-In Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Optional: Add a Sign-Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => Alert.alert('Sign-Up', 'Sign-Up button pressed')}>
              <Text style={styles.signUpLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// Stylesheet for the Home screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full height of the screen
    backgroundColor: '#f5f5f5', // Light grey background for a subtle look
  },
  inner: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    padding: 20, // Adds padding around the container
  },
  title: {
    fontSize: 28, // Large font size for the title
    fontWeight: '700', // Bold text
    color: '#333', // Dark grey text for better readability
    textAlign: 'center', // Centers the text
    marginBottom: 10, // Space below the title
  },
  subtitle: {
    fontSize: 16, // Medium font size for the subtitle
    color: '#666', // Medium grey text
    textAlign: 'center', // Centers the text
    marginBottom: 30, // Space below the subtitle
    paddingHorizontal: 10, // Horizontal padding for better text alignment
  },
  input: {
    width: '100%', // Full width relative to the container
    height: 50, // Fixed height for consistency
    backgroundColor: '#fff', // White background for input fields
    borderRadius: 8, // Rounded corners
    paddingHorizontal: 15, // Padding inside the input
    fontSize: 16, // Font size for input text
    color: '#333', // Text color
    marginBottom: 15, // Space below each input
    borderWidth: 1, // Border width
    borderColor: '#ddd', // Light border color
  },
  button: {
    backgroundColor: '#4285F4', // Google Blue (you can change this to match your branding)
    paddingVertical: 15, // Vertical padding inside the button
    paddingHorizontal: 40, // Horizontal padding inside the button
    borderRadius: 25, // Rounded corners
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
    width: '100%', // Full width relative to the container
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
    elevation: 5, // Shadow for Android
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16, // Medium font size
    fontWeight: '600', // Semi-bold text
  },
  signUpContainer: {
    flexDirection: 'row', // Aligns children horizontally
    marginTop: 20, // Space above the container
  },
  signUpText: {
    fontSize: 14, // Smaller font size for secondary text
    color: '#666', // Medium grey text
  },
  signUpLink: {
    fontSize: 14, // Same as signUpText
    color: '#4285F4', // Google Blue (change to match your branding)
    fontWeight: '600', // Semi-bold text
  },
});
