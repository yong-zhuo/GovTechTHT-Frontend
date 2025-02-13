/* eslint-disable react/prop-types */
import { useReactTable, flexRender, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table"
import { useState } from "react"
import { LuChevronDown, LuChevronsUpDown, LuChevronUp } from "react-icons/lu"
import { Link, useLocation } from "react-router"

const DataTable = ({ columns, data }) => {

    const [sorting, setSorting] = useState([])
    const location = useLocation()

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting
    })

    const sortingIconMap = { asc: <LuChevronUp />, desc: <LuChevronDown /> }

    return (
        <div>
            <table className="w-full">

                {/** Table Header */}
                <thead className="text-left">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="bg-gray-200 ">
                            {headerGroup.headers.map((header) =>
                                <th key={header.id} onClick={header.column.getToggleSortingHandler()} className="cursor-pointer">
                                    <div className="flex flex-row items-center gap-1 text-xs sm:text-md sm:p-3">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {
                                            //display sorting icon based on sorting state
                                            sortingIconMap[header.column.getIsSorted()] ?? <LuChevronsUpDown />
                                        }
                                    </div>
                                </th>
                            )}
                        </tr>
                    ))}
                </thead>

                {/** Table Body */}
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="sm:p-3 border-b border-gray-300">
                                    {cell.column.id === 'name' ? (
                                        <Link to={`${location.pathname}/${row.original.id}`}
                                            className="underline hover:text-slate-400 transition">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Link>
                                    ) :
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default DataTable