const path = require('path');

// Build ESLint command for fixing JavaScript/TypeScript files
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  // Run ESLint and Prettier on JavaScript and TypeScript files
  '*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    'prettier --write', // Run Prettier after ESLint for JS/TS files
  ],

  // Run Prettier on CSS, SCSS, and JSON files
  '*.{css,scss,json}': [
    'prettier --write', // Run Prettier on style and JSON files
  ],
};
