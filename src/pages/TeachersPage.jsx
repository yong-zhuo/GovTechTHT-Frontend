import { useMemo } from "react"
import PersonsPage from "./PersonsPage"
import { convertTeachersData } from "../utils/tableDataUtils"
import { teachers } from "../data/mockTeacherData"
import { teacherTableColumns } from "../data/tableColumns"
import Teacher from "./Teacher"

const TeachersPage = () => {

  const teachersData = useMemo(() => convertTeachersData(teachers), [])

  return (
    <>
      <PersonsPage data={teachersData} tableColumns={teacherTableColumns} SubRoute={Teacher} />
    </>
  )
}

export default TeachersPage