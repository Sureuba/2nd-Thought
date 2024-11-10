// // components/navigation/TabBarIcon.tsx
// import React from 'react';
// import { Ionicons } from '@expo/vector-icons';

// type IoniconName = keyof typeof Ionicons.glyphMap;

// interface TabBarIconProps {
//   name: IoniconName;
//   color: string;
// }

// export const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color }) => {
//   return <Ionicons name={name} size={24} color={color} />;
// };

// components/navigation/TabBarIcon.tsx
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type IoniconName = keyof typeof Ionicons.glyphMap;

interface TabBarIconProps {
  name: IoniconName;
  color: string;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color }) => {
  return <Ionicons name={name} size={24} color={color} />;
};
