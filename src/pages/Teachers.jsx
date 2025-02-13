import { Route, Routes } from "react-router"
import Teacher from "./Teacher"

const Teachers = () => {

  

  return (
    <div>
      Teachers
      <Routes>
        <Route path=":id" element={<Teacher/>} />
      </Routes>
    </div>
  )
}

export default Teachers