// /c:/Personal/Learning/ReactJS/Reusable_Components/reusable-components-vite/src/stories/UrlAsState.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../components/UrlAsState/ProductsPage";

export default {
  title: "Pages/ProductsPage-UrlState",
  component: ProductsPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/products?page=2"]}>
        <Routes>
          <Route path="/products" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof ProductsPage> = () => <ProductsPage />;

export const Default = Template.bind({});
