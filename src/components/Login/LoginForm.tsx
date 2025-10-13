import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useNavigate } from 'react-router-dom';
import { findUser } from '../auth/users';
import { setSession } from '../auth/session';
import "./index.css";
import "./styles/globals.css";
import bg from '../../assets/loginfondo.png';

export default function LoginForm() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    domain: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password, domain } = formData;

    const user = findUser(username, password);
    if (!user) {
      alert('Usuario o contraseña inválidos');
      return;
    }

    setSession({
      userId: user.id,
      username: user.username,
      role: user.role,
      domain,
      loginAt: Date.now(),
    });

    const domainRouteMap: Record<string, string> = {
      estrategico: '/estrategico/inicio',
      misional: '/misional/inicio',
      soporte: '/soporte/inicio',
      sagrilaft: '/sagrilaft',
      transparencia: '/transparencia',
    };

    const next =
      (domain && domainRouteMap[domain])
      || '/home';

    navigate(next, { replace: true });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bg})` }}>
      {/* Login Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-12 pb-8 text-center">
            <h1 className="text-gray-800 text-3xl font-bold mb-2">BIENVENIDO</h1>
            <p className="text-gray-500 text-sm">Ingresa a tu repositorio</p>
          </div>

          {/* Form */}
          <div className="px-8 pb-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username Field */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 text-sm font-medium">Usuario de red</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Ingresa tu usuario de red"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="h-11 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 text-sm font-medium">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="h-11 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded"
                />
              </div>

              {/* Domain Select */}
              <div className="space-y-2">
                <Label htmlFor="domain" className="text-gray-700 text-sm font-medium">Dominio</Label>
                <Select
                  value={formData.domain}
                  onValueChange={(value: string) => setFormData({ ...formData, domain: value })}
                >
                  <SelectTrigger className="h-11 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded">
                    <SelectValue placeholder="Selecciona un dominio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="outsourcing.com">outsourcing.com</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors rounded"
              >
                INGRESAR
              </Button>

              {/* Footer Link */}
              <div className="text-center text-sm text-gray-500 mt-4">
                ¿Problemas para acceder?{' '}
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                  Contacte al administrador
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}