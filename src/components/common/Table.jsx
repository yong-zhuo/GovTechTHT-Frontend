/* eslint-disable react/prop-types */
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table"

const Table = ({ columns, data, sorting, onSortingChange }) => {

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        sorting,
        onSortingChange
    })

    return (
        <div className="w-full">
            <table className="w-full">
                <thead className="text-start">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="bg-gray-100">
                            {headerGroup.headers.map((header) =>
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            )}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(
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

export default Table