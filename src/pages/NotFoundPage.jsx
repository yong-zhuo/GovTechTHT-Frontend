import { FaExclamationTriangle } from "react-icons/fa"

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-4xl font-semibold flex-col">
            <FaExclamationTriangle  />
            404 | Page Not Found
        </div>
    )
}

export default NotFoundPage