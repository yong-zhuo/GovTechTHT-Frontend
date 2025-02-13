import { useParams } from "react-router"
import BackButton from "../components/profile/BackButton"
import PersonDetailCard from "../components/profile/PersonDetailCard"

const ProfilePage = () => {

    const { id } = useParams()

    return (
        <div className="m-5">
            <BackButton />
            <div className="m-5 flex flex-col justify-center items-center">
                <PersonDetailCard name='John' id={id} role={'student'} details={[{}]
                } />
            </div>
        </div>
    )
}

export default ProfilePage