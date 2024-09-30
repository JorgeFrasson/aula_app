export default function SalesDashboardPage(){
    return (
        <>
            <h1 className="text-3xl pl-6" style={{ fontWeight: "700" }}>Dashboard</h1>
            <div className="flex-1 p-6 bg-gray-100">
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
        </>
    );
}