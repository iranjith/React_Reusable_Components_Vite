import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListWithQuery from "./components/ListWithQuery/ListWithQuery";
import JSONSchemaPlayground from "./components/JSONSchemaPlayground/JSONSchemaPlayground";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ListWithQuery />
      </QueryClientProvider>

      {/* <JSONSchemaPlayground /> */}
    </>
  );
}

export default App;
