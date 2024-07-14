export const mockGridData = {
  columns: [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Age", field: "age", sortable: true, filter: true },
    {
      headerName: "Country",
      field: "country",
      sortable: true,
      filter: true,
    },
    { headerName: "Email", field: "email", sortable: true, filter: true },
  ],
  rows: [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      country: "USA",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      country: "Canada",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Sam Brown",
      age: 23,
      country: "UK",
      email: "sam.brown@example.com",
    },
    {
      id: 4,
      name: "Lucy Green",
      age: 29,
      country: "Australia",
      email: "lucy.green@example.com",
    },
    {
      id: 5,
      name: "Mike Johnson",
      age: 31,
      country: "New Zealand",
      email: "mike.johnson@example.com",
    },
  ],
};
