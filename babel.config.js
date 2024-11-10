// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           root: ['./'],
//           alias: {
//             '@': './', // Maps '@' to the project root
//             '@/components': './components',
//             '@/hooks': './hooks',
//             '@/constants': './constants',
//             '@/assets': './assets'
//             // Add other aliases as needed
//           },
//         },
//       ],
//     ],
//   };
// };
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            '@/components': './components',
            '@/hooks': './hooks',
            '@/constants': './constants',
            '@/assets': './assets'
            // Add other aliases as needed
          },
        },
      ],
    ],
  };
};
