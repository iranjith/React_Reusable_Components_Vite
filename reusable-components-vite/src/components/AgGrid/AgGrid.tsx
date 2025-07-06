import { useQuery } from "@tanstack/react-query";
import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ──────────────────────────────────────────────
// CONFIG
// ──────────────────────────────────────────────
const PAGE_SIZE = 20;

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

// DummyJSON fetcher
const fetchUsersPage = async (page: number) => {
  const skip = page * PAGE_SIZE;
  const res = await fetch(
    `https://dummyjson.com/users?limit=${PAGE_SIZE}&skip=${skip}`
  );
  if (!res.ok) throw new Error("Network error");
  const data: {
    users: User[];
    total: number;
    skip: number;
    limit: number;
  } = await res.json();

  return { rows: data.users, total: data.total };
};

const UsersGrid = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsersPage(page),
    staleTime: 60_000,
  });

  const columnDefs = useMemo<ColDef<User>[]>(
    () => [
      { field: "id", headerName: "ID", width: 80 },
      { field: "firstName", headerName: "First Name", flex: 1 },
      { field: "lastName", headerName: "Last Name", flex: 1 },
      { field: "email", flex: 1 },
      { field: "age", width: 90 },
    ],
    []
  );

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;

  if (isLoading) {
    return <h3>Loading..</h3>;
  }

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          rowData={data?.rows ?? []}
          columnDefs={columnDefs}
          pagination={false}
        />
      </div>

      {/* pager */}
      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          ◀ Prev
        </button>

        <span style={{ margin: "0 8px" }}>
          Page {page + 1} / {totalPages || "…"}
        </span>

        <button
          onClick={() =>
            setPage((p) =>
              data && (p + 1) * PAGE_SIZE < data.total ? p + 1 : p
            )
          }
          disabled={!data || (page + 1) * PAGE_SIZE >= (data?.total ?? 0)}
        >
          Next ▶
        </button>

        {isFetching && <span style={{ marginLeft: 12 }}>Updating…</span>}
      </div>
    </>
  );
};

export default UsersGrid;
