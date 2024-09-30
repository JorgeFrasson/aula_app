import { Outlet } from "react-router-dom";
import DashboardSideBar from "./dashboard-menu";
import DashboardHeader from "./dashboard-header";

export default function DashboardLayout(){
    return (
        <div className="flex">
            <DashboardSideBar />
            <div className="flex-1 bg-gray-100">
                <DashboardHeader />
                <Outlet />
            </div>
        </div>
    );
}