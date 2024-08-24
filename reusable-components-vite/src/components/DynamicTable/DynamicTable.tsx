import { useState } from "react";

const DynamicTable = () => {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    console.log(data.get("rows"));
    setRows(Number(data.get("rows")));
    setColumns(Number(data.get("columns")));
  };
  const dynamicTable = (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <span
            style={{
              fontSize: "1rem",
              padding: "1rem",
            }}
          >
            <label>Rows</label>
          </span>
          <span>
            <input
              id="rows"
              name="rows"
              minLength={1}
              type="number"
              defaultValue={rows}
            />
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: "1rem",
              padding: "1rem",
            }}
          >
            <label htmlFor="columns">Columns</label>
          </span>
          <span>
            <input
              id="columns"
              name="columns"
              minLength={1}
              type="number"
              defaultValue={columns}
            />
          </span>
        </div>
        <div>
          <button
            type="submit"
            style={{
              width: "100px",
              backgroundColor: "yellow",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        {Boolean(rows) && Boolean(columns) && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <table>
              <tbody>
                {Array.from({ length: rows }).map((_, row) => (
                  <tr key={row}>
                    {Array.from({ length: columns }).map((_, column) => (
                      <td
                        key={column}
                        style={{
                          border: "1px solid black",
                          padding: "1rem",
                        }}
                      >
                        {column % 2 === 0
                          ? rows * column + (row + 1)
                          : rows * (column + 1) - row}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );

  return dynamicTable;
};

export default DynamicTable;
