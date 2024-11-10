// // app/(tabs)/_layout.tsx
// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Correct Import
// import { Colors } from '@/constants/Colors'; // Correct Import
// import { useColorScheme } from '@/hooks/useColorScheme'; // Correct Import

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="newTabPage1"
//         options={{
//           title: 'Page 1',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="newTabPage2"
//         options={{
//           title: 'Page 2',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index" // Home Tab
        options={{
          title: 'Home', // Set the title to "Home"
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore" // Explore Tab
        options={{
          title: 'Explore', // Set the title to "Explore"
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newTabPage1" // Page 1 Tab
        options={{
          title: 'Page 1', // Set the title to "Page 1"
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newTabPage2" // Page 2 Tab
        options={{
          title: 'Page 2', // Set the title to "Page 2"
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
  name="habits" // Connects to habits.tsx
  options={{
    title: 'Habits', // Set the title to "Habits"
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
    ),
  }}
/>


      
    </Tabs>
  );
}
