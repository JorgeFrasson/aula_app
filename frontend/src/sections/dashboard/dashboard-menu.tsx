import Menu from "../../components/menu/menu";
import { PATHS } from "../../routes/paths"

export default function DashboardSideBar(){
    const firstMenuItems = [
        {
            path: PATHS.dashboard.root,
            label: "Dashboard"
        },
        {
            path: PATHS.dashboard.users.root,
            label: "Usuários",
        },
    ];

    const secondMenuItems = [
        {
            label: "Configurações",
        },
        {
            label: "Sair",
        },
    ];

    return (
        <div className="min-w-60 bg-white text-white h-screen">
            <div className="flex flex-col justify-between h-full">
                <div id="first-section" className="">
                    <h2 className="text-lg font-bold m-4 ml-6" style={{fontWeight: "800"}}>
                        <span className="text-blue-500">Full</span>
                        <span className="text-black">Stack Course</span>
                    </h2>
                    <Menu items={firstMenuItems}/>
                </div>
                <div id="footer-section" className="mb-12">
                    <div style={{borderTop: "1px solid #E0E0E0", marginBottom: "12px"}}/>
                    <Menu items={secondMenuItems}/>
                </div>
            </div>
        </div>
    )
}