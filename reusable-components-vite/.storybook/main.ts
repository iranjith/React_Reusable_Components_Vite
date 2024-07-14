import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
