/* eslint-disable react/prop-types */
const PersonDetailCard = ({ role, name, details, id }) => {

    return (
        <div className="bg-white shadow rounded-lg flex flex-row justify-between items-center p-5 mt-5 w-full sm:w-3/4">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold capitalize">{name}</h1>
                <h2 className="text-md font-semibold capitalize">Role: {role}</h2>
                <h2 className="text-md font-semibold capitalize">Id: {id}</h2>
            </div>
            <div className="flex flex-col">
                {details.map((detail, index) => (
                    <div key={index} className="flex flex-row justify-between items-center">
                        <h2 className="text-md font-semibold capitalize">{detail.label}: {detail.value}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonDetailCard