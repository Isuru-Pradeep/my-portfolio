// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1C454F', // Dark blue
//         secondary: '#458B90', // Medium blue
//         tertiary: '#74C3C9', // Light blue
//         background: '#E6F7FF', // Very light blue
//         text: '#333333', // Dark gray for text
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rich teal as primary - professional yet distinctive
        primary: "#136F63", 
        // Softer complementary accent - creates balance
        secondary: "#3E92CC", 
        // Lighter tint for highlights and accents
        tertiary: "#22AED1", 
        // Warm off-white background for readability
        background: "#F8F9FA", 
        // Deep charcoal for text - softer than pure black
        text: "#2D3142", 
        // Accent color for calls-to-action
        accent: "#D81E5B", 
        // Light gray for subtle dividers and secondary elements
        neutral: "#E6E8E6", 
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'hover': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};