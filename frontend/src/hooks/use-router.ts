import { useNavigate, useLocation, useParams, useMatch } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const match = useMatch(location.pathname); // Você pode personalizar isso para adequar-se às suas rotas

  return {
    push: (path: string) => navigate(path),  // Navegação para uma rota específica
    replace: (path: string) => navigate(path, { replace: true }),  // Substitui a rota no histórico
    pathname: location.pathname,  // Caminho atual
    query: new URLSearchParams(location.search),  // Objeto de consulta (query string)
    params,  // Parâmetros da rota atual
    match,  // Informações de match com a rota atual
    back: () => navigate(-1),  // Volta para a página anterior
    forward: () => navigate(1),  // Avança para a próxima página
  };
};