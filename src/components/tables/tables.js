import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter,useSortBy, usePagination,  } from "react-table";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
const Tables = () => {
  const data = useSelector((state) => state.EmployeeData);
  console.log(data)
  const [sortedColumn, setSortedColumn] = useState(null);
  const columns = useMemo(
    () => [
        {
          Header: "First Name",
          accessor: "firstName",
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
        {
          Header: "Start Date",
          //Format date in order to sort it correctly and return something in case of empty field to avoid crash
          accessor: row => new Date(row.startDate),
          sortType: 'datetime',
          Cell: ({ cell: { value }}) => value.toLocaleDateString(),
        },
        {
          Header: "Department",
          accessor: "department",
        },
        {
          Header: "Date of Birth",
          //Format date in order to sort it correctly and return something in case of empty field to avoid crash
          accessor: row => new Date(row.birthDate),
          sortType: 'datetime',
          Cell: ({ cell: { value }}) => value.toLocaleDateString(),
        },
        {
          Header: "Street",
          accessor: "street",
        },
        {
          Header: "City",
          accessor: "city",
        },
        {
          Header: "State",
          accessor: "state",
        },
        {
          Header: "Zip Code",
          accessor: "zipCode",
        },
      ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    setPageSize,
    pageCount,
    toggleSortBy,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    state: { globalFilter, pageIndex, pageSize, },
    pageOptions,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      initialState: {
        sortBy: sortedColumn ? [{ id: sortedColumn }] : [],
      },
    
      pageCount: Math.ceil(data.length / 3),
    },
    useGlobalFilter,useSortBy, usePagination
    
  );
  
  const handleColumnClick = (columnId) => {
    setSortedColumn(columnId);
  };




  return (
    <div className="table_content">
      <input
        className="search-bar"
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search Employees..."
      />
      <table className="my-table" {...getTableProps()}>
    
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
              <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={column.isSorted ? 'sorted' : ''}
              style={column.isSorted ? { backgroundColor: 'gray' } : null}
              {...column.getToggleHiddenProps()} 
              >
                {column.render('Header')}
              </th>
            ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="button_content">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Précédent
        </button>
        <span>
       <select
          value={pageSize}
          onChange={  e => setPageSize(Number(e.target.value))}
        >
           { [3, 5, 10].map(pageSize => (
                 <option key={pageSize} value={pageSize}>
                    show{pageSize}
                </option>))}
        </select> 

          Page{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>

        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Suivant
        </button>

        <select
          value={pageIndex}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) : 0;
            gotoPage(page);
          }}
        >
          {pageOptions.map((option, index) => (
            <option key={index} value={index}>
              Page {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
} ;

export default Tables;
