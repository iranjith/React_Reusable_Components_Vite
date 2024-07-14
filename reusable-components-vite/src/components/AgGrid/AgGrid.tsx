import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { mockGridData } from "./mockData";

interface ColumnProps {
  headerName: string;
  field: string;
  sortable: boolean;
  filter: boolean;
}

interface RowProps {
  id: number;
  name: string;
  age: number;
  country: string;
  email: string;
}

const AgGrid = () => {
  const [columnDefs, setColumnDefs] = useState<ColumnProps[]>([]);
  const [rowData, setRowData] = useState<RowProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = mockGridData;
        setColumnDefs(data.columns);
        setRowData(data.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default AgGrid;
