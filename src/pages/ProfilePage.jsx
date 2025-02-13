/* eslint-disable react/prop-types */
import BackButton from "../components/profile/BackButton"
import PersonDetailCard from "../components/profile/PersonDetailCard"
import GPADoubleLineChart from "../components/GPADoubleLineChart"

const ProfilePage = ({dataset, id, role, name, details}) => {

    return (
        <div className="m-5">
            <BackButton />
            <div className="m-5 flex flex-col justify-center items-center">
                <PersonDetailCard name={name} id={id} role={role} details={details} />
                <div className="flex flex-col bg-white rounded-lg shadow p-5 mt-5 w-full sm:w-3/4">
                    <GPADoubleLineChart firstDataSet={dataset[0]} secondDataSet={dataset[1]} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage