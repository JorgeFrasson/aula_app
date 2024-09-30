export default function DashboardPage(){
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
                <h2 className="text-lg font-bold mb-4">FullStack Course</h2>
                <ul>
                    <li className="mb-2">
                        <a href="#dashboard" className="hover:text-blue-400">Dashboard</a>
                    </li>
                    <li className="mb-2">
                        <a href="#users" className="hover:text-blue-400">Usuários</a>
                    </li>
                    <li className="mb-2">
                        <a href="#settings" className="hover:text-blue-400">Configurações</a>
                    </li>
                    <li>
                        <a href="#logout" className="hover:text-blue-400">Logout</a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center">
                        <img src="/path/to/profile-pic.jpg" alt="User Profile" className="w-10 h-10 rounded-full mr-2" />
                        <span className="text-gray-700">Moni Roy</span>
                        <span className="text-sm text-gray-500 ml-2">Admin</span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-gray-700">Usuários</h2>
                        <p className="text-2xl font-bold">40,689</p>
                        <p className="text-green-500">8.5% Up from yesterday</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-gray-700">Vendas</h2>
                        <p className="text-2xl font-bold">10,293</p>
                        <p className="text-green-500">1.3% Up from past week</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-gray-700">Total de Vendas</h2>
                        <p className="text-2xl font-bold">$89,000</p>
                        <p className="text-red-500">4.3% Down from yesterday</p>
                    </div>
                </div>

                {/* Sales Details Chart */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-gray-700 mb-4">Sales Details</h2>
                    {/* Aqui você pode usar um componente de gráfico, como Chart.js ou Recharts */}
                    <div className="h-64 bg-blue-100 flex items-center justify-center">
                        <p>Gráfico de Vendas aqui</p>
                    </div>
                </div>
            </div>
        </div>
    );
}