export default function DashboardHeader(){
    return (
        <div className="flex justify-end items-center mb-4 bg-white p-4">
            <div className="flex items-center">
                <img 
                    src="/public/person.png" 
                    alt="User Profile" 
                    className="w-10 h-10 rounded-full mr-2 bg-slate-400" 
                />
                <span className="text-gray-700">Moni Roy</span>
                <span className="text-sm text-gray-500 ml-2">Admin</span>
            </div>
        </div>
    );
}