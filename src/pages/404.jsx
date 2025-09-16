import { FaFaceDizzy } from "react-icons/fa6";
const NotFound = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                    <FaFaceDizzy className="text-[var(--green)] h-48 w-48 inline-block" />
                    <h1 className="text-5xl text-[var(--green)] mt-3 font-bold">404 - Not Found</h1>
                    <p className="text-md lg:text-xl text-center text-gray-700 font-light tracking-wider leading-relaxed">goto <a href="/dashboard">Dashboard</a></p>
                </div>
            </div>
        </div>
    )
}

export default NotFound