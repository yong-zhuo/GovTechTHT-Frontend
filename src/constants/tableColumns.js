/**@type import('@tanstack/react-table').ColumnDef<any> */

export const studentTableColumns = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Cumulative GPA',
    accessorKey: 'cumulativeGPA',
  },
  {
    header: 'Last Semester GPA',
    accessorKey: 'lastSemesterGPA',
  },
]

export const teacherTableColumns = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Avg. Last Semester GPA',
    accessorKey: 'avgLastSemesterGPA',
  },
  {
    header: 'Avg. Cumulative GPA',
    accessorKey: 'avgCumulativeGPA',
  },
]
