import { ReactElement } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { useState } from "react";
import { Link } from "react-router-dom";

type DataType = {
  _id: String;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "dkjflkjdfjkds",
      amount: 67454,
      quantity: 20,
      discount: 6000,
      status: <span className="red">Processing </span>,
      action: <Link to={"/order/dkjflkjdfjkds"}></Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();

  return (
    <div className="conatiner">
      {" "}
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
