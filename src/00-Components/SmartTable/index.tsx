import React, { FC, useEffect, useState } from "react";

import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender,
  FilterFns,
} from "@tanstack/react-table";

import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";
import TablePagination from "./TablePagination";
import TableHeader from "./TableHeader";
import DebouncedInput from "./TableDebounceInput";
import { CSVLink } from "react-csv";
import { ListItemInterface } from "../HorMultiSelect/MultiselectInterfaces";
import HorMultiSelect from "../HorMultiSelect/HorMultiSelect";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

interface Props {
  data: any[];
  columns: ColumnDef<any>[];
}

const SmartTable: FC<Props> = ({ columns, data }) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const headers = columns.map((column) => {
    return column.accessorKey;
  });

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [addFilter, setAddFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    ListItemInterface[] | undefined
  >();

  const gCols = React.useMemo<ColumnDef<any, any>[]>(() => [...columns], []);

  const table = useReactTable({
    data,
    columns: gCols,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const getTableValues = () => {
    return table
      .getRowModel()
      .rows.map((row) => row.getAllCells().map((cell) => cell));
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    const filterValues = selectedFilters?.map((item: any) => ({
      value: e.target[item.label].value,
      label: item.label,
      type: item.type,
    }));
    console.log(filterValues);
  }

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  const getFilterItemsFromColumns = () => {
    return columns.map((column) => ({
      value: column.id,
      label: column.id,
      type: column.type,
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

  return (
    <div className="p-2">
      {data && data.length > 0 && (
        <CSVLink
          data={data.map((item: any) =>
            Object.assign({}, ...headers.map((key) => ({ [key]: item[key] })))
          )}
        >
          Download me
        </CSVLink>
      )}
      {data && data.length > 0 && (
        <button onClick={() => setAddFilter(true)}>Add Filter</button>
      )}
      {selectedFilters && selectedFilters.length > 0 && (
        <form id="test" onSubmit={handleSubmit}>
          {selectedFilters.map((filter) => (
            <label key={filter.label}>
              {filter.label}
              <input name={filter.label} />
            </label>
          ))}
          <button type="submit" form="test">
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
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, idx) => (
            <TableHeader key={idx} headerGroup={headerGroup} table={table} />
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <TablePagination table={table} />
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
    </div>
  );
};

export default SmartTable;
