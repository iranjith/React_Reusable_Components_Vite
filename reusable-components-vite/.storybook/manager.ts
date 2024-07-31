import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "dark", // or 'dark'
  brandTitle: "Ranjith's React Reusable Components",
});

addons.setConfig({
  theme,
});