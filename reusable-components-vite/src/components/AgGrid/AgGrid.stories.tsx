import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import UsersGrid from "./AgGrid";

// Simulate server-side paginated data
const fetchRows = async (page: number, pageSize: number) => {
  const allRows = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "BMW", model: "M3", price: 60000 },
    { make: "Audi", model: "A4", price: 40000 },
    { make: "Honda", model: "Civic", price: 25000 },
    { make: "Mazda", model: "MX-5", price: 30000 },
    { make: "Tesla", model: "Model 3", price: 50000 },
    // ...add more rows as needed
  ];
  const start = page * pageSize;
  const end = start + pageSize;
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 300));
  return {
    rows: allRows.slice(start, end),
    total: allRows.length,
  };
};

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaginatedAgGrid = (args: any) => {
  const [page, setPage] = useState(0);
  const pageSize = 3;

  const { data, isLoading } = useQuery({
    queryKey: ["rows", page, pageSize],
    queryFn: () => fetchRows(page, pageSize),
    staleTime: 60_000,
  });

  if (isLoading) {
    return <h3>Loading..</h3>;
  }

  return (
    <div>
      <UsersGrid {...args} rowData={data?.rows || []} loading={isLoading} />
      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </button>
        <span style={{ margin: "0 8px" }}>
          Page {page + 1} of {data ? Math.ceil(data.total / pageSize) : 1}
        </span>
        <button
          onClick={() =>
            setPage((p) =>
              data && (p + 1) * pageSize < data.total ? p + 1 : p
            )
          }
          disabled={data ? (page + 1) * pageSize >= data.total : true}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof UsersGrid> = {
  component: UsersGrid,
  title: "Components/AgGrid",
  args: {
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
    ],
    rowData: [],
  },
  argTypes: {
    columnDefs: { control: "object" },
    rowData: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithPagination: Story = {
  render: (args) => (
    <QueryClientProvider client={queryClient}>
      <PaginatedAgGrid {...args} />
    </QueryClientProvider>
  ),
};
