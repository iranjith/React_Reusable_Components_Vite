import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListWithQuery from "./components/ListWithQuery/ListWithQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ListWithQuery />
      </QueryClientProvider>
    </>
  );
}

export default App;
