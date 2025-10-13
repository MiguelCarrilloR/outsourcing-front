import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearSession } from '../components/auth/session';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    clearSession();
    navigate('/', { replace: true }); // tu login está en "/"
  }, [navigate]);

  return <div style={{ padding: 16 }}>Cerrando sesión…</div>;
}
