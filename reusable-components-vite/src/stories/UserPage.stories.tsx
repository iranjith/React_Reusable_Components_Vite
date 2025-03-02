// /c:/Personal/Learning/ReactJS/Reusable_Components/reusable-components-vite/src/stories/UrlAsState.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Users from "../components/UrlAsState/UsersPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export default {
  title: "Pages/UsersPage-UrlState",
  component: Users,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/users?search=bo"]}>
        <Routes>
          <Route path="/users" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof Users> = () => <Users />;

export const Default = Template.bind({});
