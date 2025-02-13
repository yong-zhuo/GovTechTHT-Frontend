import { useParams } from "react-router"

const Student = () => {

  const { id } = useParams()

  return (
    <div>{id}</div>
  )
}

export default Student