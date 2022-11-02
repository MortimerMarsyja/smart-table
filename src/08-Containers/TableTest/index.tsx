import React, { FC, useEffect, useState } from "react";
import { RankingInfo } from "@tanstack/match-sorter-utils";
import { FilterFn } from "@tanstack/table-core";
import SmartTable from "../../00-Components/SmartTable";
import React from "react";
import HorMultiSelect from "../../00-Components/HorMultiSelect/HorMultiSelect";
import { ListItemInterface } from "../../00-Components/HorMultiSelect/MultiselectInterfaces";

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
  const [data, setData] = useState<MyColumn[]>();
  const [addFilter, setAddFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    ListItemInterface[] | undefined
  >();

  const columns = [
    {
      accessorKey: "id",
      id: "Id",
      cell: (info: any) => info.getValue(),
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.fullName,
      id: "Full Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Full Name</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "Email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
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

  const getFilterItemsFromColumns = () => {
    return columns.map((column) => ({
      value: column.id,
      label: column.id,
      type: "string",
    }));
  };

  const handleSelectFilters = (
    selectedFilters: ListItemInterface[] | undefined
  ) => {
    if (selectedFilters && selectedFilters.length > 0) {
      setSelectedFilters(selectedFilters);
      setAddFilter(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data && data.length > 0 && (
        <button onClick={() => setAddFilter(true)}>Add Filter</button>
      )}
      {selectedFilters && selectedFilters.length > 0 && (
        <form>
          {selectedFilters.map((filter) => (
            <>
              <label>{filter.label}</label>
              <input name={filter.label} />
            </>
          ))}
          <button
            type="submit"
            onSubmit={(formValues) => console.log(formValues)}
          >
            Submit
          </button>
        </form>
      )}
      {addFilter && (
        <HorMultiSelect
          label="Filter by"
          list={getFilterItemsFromColumns()}
          onSelect={(items) => handleSelectFilters(items)}
        />
      )}
      {data && <SmartTable columns={columns} data={data} />}
    </>
  );
};

export default TestTable;
