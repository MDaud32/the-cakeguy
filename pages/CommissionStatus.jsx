import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CommissionStatus = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(10);

  const columns = [
    {
      name: "Client",
      selector: (row) => row.client,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    setLoading(true);
    const URL = "";
    const response = await fetch(URL);

    const user = await response.json();
    setData(user);
  }

  return (
    <div className="md:w-[73%] lg:w-[80%] ml-auto sm:px-8 lg:px-16">
      <div>
        <DataTable
          title="data"
          columns={columns}
          data={data}
          progressPending={loading}
        />
      </div>
    </div>
  );
};

export default CommissionStatus;
