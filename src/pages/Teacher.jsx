import { useParams } from "react-router"

const Teacher = () => {
  const { id } = useParams()
  return (
    <div>{id}</div>
  )
}

export default Teacher