import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-500">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <Outlet />
            </div>
        </div>
    );
}