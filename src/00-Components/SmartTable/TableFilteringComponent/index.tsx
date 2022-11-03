import HorMultiSelect from "../../../00-Components/HorMultiSelect/HorMultiSelect";
import { ListItemInterface } from "@components/HorMultiSelect/MultiselectInterfaces";
import React, { FC, useState } from "react";

interface Props {
  data: any[];
  columns: any[];
  updateData: (data: any[]) => void;
}

type FilterType = "min-max" | "input" | "select" | "date-range";
interface FilterObject {
  value: string;
  label: string;
  type: FilterType;
  id: string;
}

const TableFilteringComponent: FC<Props> = ({ data, columns, updateData }) => {
  const [addFilter, setAddFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    ListItemInterface[] | undefined
  >();

  const filterByType = (filterObject: FilterObject) => {
    let filteredData = data;
    const updatedData = filteredData.filter((item) => {
      if (filterObject.type === "min-max") {
        return item[filterObject.id] >= filterObject.value;
      }
      if (filterObject.type === "input") {
        if (item[filterObject.id].includes(filterObject.value)) {
          return item;
        }
      }
      if (filterObject.type === "select") {
        return item[filterObject.id] === filterObject.value;
      }
      if (filterObject.type === "date-range") {
        return item[filterObject.id] === filterObject.value;
      }
    });
    console.log(updatedData, "show me");
    updateData(updatedData);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    const filterValues = selectedFilters?.map((item: any) => ({
      value: e.target[item.label].value,
      label: item.label,
      type: item.type,
      id: item.id,
    }));
    console.log(filterValues, "dame lo que es mio");
    filterValues?.forEach((item) => {
      filterByType(item);
    });
  }

  const getFilterItemsFromColumns = () => {
    return columns.map((column) => ({
      value: column.id,
      label: column.id,
      type: column.type,
      id: column.accessorKey,
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
    <div>
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
    </div>
  );
};

export default TableFilteringComponent;
