import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListWithQuery from "./components/ListWithQuery/ListWithQuery";
import JSONSchemaPlayground from "./components/JSONSchemaPlayground/JSONSchemaPlayground";
import DynamicTable from "./components/DynamicTable/DynamicTable";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import TemparatureConverter from "./components/TemparatureConverter/TemparatureConverter";
import ToDoList from "./components/ToDoList/ToDoList";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <ListWithQuery />
      </QueryClientProvider> */}
      {/* <DynamicTable /> */}
      {/* <JSONSchemaPlayground /> */}
      {/* <TemparatureConverter /> */}
      <ToDoList />
    </>
  );
}

export default App;
