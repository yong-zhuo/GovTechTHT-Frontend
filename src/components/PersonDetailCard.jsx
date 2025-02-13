const PersonDetailCard = ({ role, name, details, id }) => {

    return (
        <div className="bg-white shadow p-5 rounded-lg flex flex-row justify-between items-center">
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