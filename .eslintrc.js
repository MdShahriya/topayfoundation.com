export default {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
      // React specific rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // General JavaScript rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      
      // Accessibility
      'jsx-a11y/alt-text': 'error',
      
      // Style rules
      'semi': ['error', 'always'],
      'quotes': ['warn', 'double'],
      'indent': ['warn', 2],
    },
    overrides: [
      {
        files: ['*.jsx', '*.js'],
      },
    ],
  };