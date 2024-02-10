module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime", // Ensure React JSX runtime rules
  ],
  env: {
    browser: true, // Enforce browser-specific globals
    es6: true, // Support ES6 features
  },
  parserOptions: {
    ecmaVersion: 2021, // Set the latest supported ECMAScript version
    sourceType: "module", // Indicate a module environment
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
  plugins: ["react", "jsx-a11y"], // Enable recommended accessibility rules
  rules: {
    // Tailor rules to your preferences, balancing maintainability and accessibility:
    "import/no-cycle": 1, // Warn about import cycles (moderate severity)
    "no-console": 1, // Warn about using `console` in production (moderate severity)
    "react/prop-types": 1, // Warn about missing prop types (moderate severity)
    "linebreak-style": [1, "unix"], // Enforce Unix-style line breaks (consistent style)
    "react/state-in-constructor": 1, // Consider modern component structures (moderate severity)
    "import/prefer-default-export": 1, // Encourage default exports (moderate severity)
    "max-len": [1, 120], // Limit line length for readability (adjust as needed)
    "object-curly-newline": 0, // Allow non-braced object properties (personal preference)
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ], // Enforce proper file extensions
    "react/jsx-one-expression-per-line": 0, // Allow multiline JSX for clarity (personal preference)
    "jsx-a11y/click-events-have-key-events": 1, // Enforce keyboard accessibility (important)
    "jsx-a11y/alt-text": 1, // Provide alt text for images (important)
    "jsx-a11y/no-autofocus": 1, // Avoid automatic focus on elements (important)
    "jsx-a11y/no-static-element-interactions": 1, // Enforce interactive elements to be usable (important)
    "react/no-array-index-key": 1, // Use unique keys for list items (important)
    "no-param-reassign": 1, // Avoid reassigning function parameters (moderate severity)
    "react/react-in-jsx-scope": 1, // Ensure React is in scope for JSX (important)
    "react/jsx-props-no-spreading": 1, // Consider alternatives to prop spreading (moderate severity)
    "no-sparse-arrays": 1, // Avoid sparse arrays for performance (moderate severity)
    camelcase: 1, // Enforce camelCase naming convention (consistent style)
  },
};
