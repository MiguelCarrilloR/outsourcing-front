import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import logo from 'figma:asset/17c2d097e9f962343cd1f6e4b38f946409ba6014.png';
import { Lock, User, Globe } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    domain: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Aquí iría la lógica de autenticación
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-red-600/15 to-red-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-2xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-4 border-red-500/20 rotate-45"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-red-500/10 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 border-4 border-red-600/20"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md z-10">
        <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-red-100">
          {/* Header with Logo */}
          <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 px-8 py-12 text-center relative overflow-hidden">
            {/* Header decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="flex justify-center mb-6 relative">
              <div className="bg-white p-4 rounded-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-red-100">
                <img src={logo} alt="Logo" className="w-24 h-24" />
              </div>
            </div>
            <h1 className="text-white text-4xl relative z-10">¡Bienvenido!</h1>
            <p className="text-red-50 mt-2 relative z-10 text-lg">Inicia sesión en tu cuenta</p>
          </div>

          {/* Form */}
          <div className="px-8 py-10 bg-gradient-to-b from-white to-red-50/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-800">Usuario</Label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center group-focus-within:bg-red-500/20 transition-colors">
                    <User className="text-red-600 w-5 h-5" />
                  </div>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Ingresa tu usuario"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="pl-16 h-14 border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 rounded-xl hover:border-red-300 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-800">Contraseña</Label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center group-focus-within:bg-red-500/20 transition-colors">
                    <Lock className="text-red-600 w-5 h-5" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-16 h-14 border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 rounded-xl hover:border-red-300 transition-all"
                  />
                </div>
              </div>

              {/* Domain Select */}
              <div className="space-y-2">
                <Label htmlFor="domain" className="text-gray-800">Dominio</Label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center z-10 group-focus-within:bg-red-500/20 transition-colors">
                    <Globe className="text-red-600 w-5 h-5" />
                  </div>
                  <Select
                    value={formData.domain}
                    onValueChange={(value) => setFormData({ ...formData, domain: value })}
                  >
                    <SelectTrigger className="h-14 pl-16 border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 rounded-xl hover:border-red-300 transition-all">
                      <SelectValue placeholder="Selecciona un dominio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="empresa.com">empresa.com</SelectItem>
                      <SelectItem value="admin.empresa.com">admin.empresa.com</SelectItem>
                      <SelectItem value="dev.empresa.com">dev.empresa.com</SelectItem>
                      <SelectItem value="test.empresa.com">test.empresa.com</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-600">Recordarme</span>
                </label>
                <a href="#" className="text-sm text-red-600 hover:text-red-700 transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Iniciar Sesión
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes una cuenta?{' '}
                <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
                  Regístrate aquí
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="#" className="text-sm hover:text-red-600 transition-colors">Ayuda</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-sm hover:text-red-600 transition-colors">Privacidad</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-sm hover:text-red-600 transition-colors">Términos</a>
          </div>
          <p className="text-sm">© 2025 Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}