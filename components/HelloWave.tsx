// import { StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
//   withSequence,
// } from 'react-native-reanimated';

// import { ThemedText } from '@/components/ThemedText';

// export function HelloWave() {
//   const rotationAnimation = useSharedValue(0);

//   rotationAnimation.value = withRepeat(
//     withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
//     4 // Run the animation 4 times
//   );

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ rotate: `${rotationAnimation.value}deg` }],
//   }));

//   return (
//     <Animated.View style={animatedStyle}>
//       <ThemedText style={styles.text}>👋</ThemedText>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 28,
//     lineHeight: 32,
//     marginTop: -6,
//   },
// });

// components/HelloWave.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const HelloWave = () => {
  const rotate = useSharedValue(0);

  React.useEffect(() => {
    rotate.value = withRepeat(withTiming(360, { duration: 2000 }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));

  return (
    <Animated.View style={[styles.wave, animatedStyle]}>
      {/* Your wave animation content */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wave: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
});
