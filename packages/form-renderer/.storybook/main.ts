import { dirname, join } from "path";
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [getAbsolutePath("@storybook/addon-actions"), getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/preset-create-react-app")],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}