import { flexRender } from "@tanstack/react-table";
import React from "react";
import { FC } from "react";
import { Filter } from "../TableFilter";

interface Props {
  headerGroup: any;
  table: any;
}
const TableHeader: FC<Props> = ({ headerGroup, table }) => {
  return (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => {
        return (
          <th key={header.id} colSpan={header.colSpan}>
            {header.isPlaceholder ? null : (
              <>
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? "cursor-pointer select-none"
                      : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              </>
            )}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
