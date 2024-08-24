import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListWithQuery from "./components/ListWithQuery/ListWithQuery";
import JSONSchemaPlayground from "./components/JSONSchemaPlayground/JSONSchemaPlayground";
import DynamicTable from "./components/DynamicTable/DynamicTable";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <ListWithQuery />
      </QueryClientProvider> */}
      <DynamicTable />
      {/* <JSONSchemaPlayground /> */}
    </>
  );
}

export default App;
