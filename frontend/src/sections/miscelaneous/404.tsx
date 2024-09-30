import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    // Substitua '/dashboard' pela rota que você deseja redirecionar
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <img src="/path/to/your-404-image.png" alt="404" className="mx-auto w-40 h-auto" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Looks like you've got lost...
        </h2>
        <button
          onClick={handleBackToDashboard}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
