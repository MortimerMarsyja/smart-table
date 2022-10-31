import { FC, useEffect, useState } from "react";
import { RankingInfo } from "@tanstack/match-sorter-utils";
import { FilterFn } from "@tanstack/table-core";
import SmartTable from "../../00-Components/SmartTable";
import React from "react";
import { fuzzySort } from "@/00-Components/SmartTable/TableFilter";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

interface Props {
  headerGroup: any;
  table: any;
}

interface MyColumn {
  id: string;
  fullName: string;
  email: string;
  n_purchases: number;
  total_spent: number;
  total_discounts: number;
  currency: string;
  n_single_purchases: number;
  single_purchases_spent: number;
  single_purchases_discounts: number;
  first_single_purchase_date_in_period: string;
  latest_single_purchase_date_in_period: string;
  n_recurring_purchases: number;
  recurring_purchases_spent: number;
  recurring_purchases_discounts: number;
  first_recurring_purchase_date_in_period: string;
  latest_recurring_purchase_date_in_period: string;
  status: string;
  canceledAt: string;
  expiresAt: string;
}

const TestTable: FC = () => {
  const [data, setData] = useState();

  const columns = [
    {
      accessorKey: "id",
      cell: (info: any) => info.getValue(),
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.fullName,
      id: "fullName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Full Name</span>,
      footer: (props: any) => props.column.id,
    },
  ];

  const getData = async () => {
    const response = await fetch(
      "https://assets.sesamy.dev/testdata/faketransactions.json"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <p>test</p>
      {data && <SmartTable columns={columns} data={data} />}
    </>
  );
};

export default TestTable;
