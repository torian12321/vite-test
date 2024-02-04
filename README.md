# Create a React Library with TypeScript and Vite

This repository is an example of a React library created with TypeScript and Vite.

## Getting Started

First, install the dependencies of the monorepo:

```bash
yarn install
```

Build the library:

```bash
cd packages/form-renderer && yarn build
```

Run the development server of the test project:

```bash
cd sites/form-builder && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to start the storybook server, run:

```bash
cd packages/form-builder && yarn storybook
```

## Bibliography

[Original ref](https://github.com/nicolaserny/react-library-vite-example)
