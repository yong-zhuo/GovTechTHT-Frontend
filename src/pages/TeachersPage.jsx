import { useMemo } from "react"
import PersonsPage from "./PersonsPage"
import { convertTeachersData } from "../utils/tableDataUtils"
import { teachers } from "../data/mockTeacherData"
import { teacherTableColumns } from "../data/tableColumns"

const TeachersPage = () => {

  const teachersData = useMemo(() => convertTeachersData(teachers), [])

  return (
    <>
      <PersonsPage data={teachersData} tableColumns={teacherTableColumns}/>
    </>
  )
}

export default TeachersPage