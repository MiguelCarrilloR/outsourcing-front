import type { Role } from './session';

// Usuarios “quemados”
export const USERS: Array<{id: string; username: string; password: string; role: Role}> = [
  { id: '1', username: 'admin',     password: 'admin123',    role: 'ADMIN' },
  { id: '2', username: 'guardian',  password: 'guardian123', role: 'GUARDIAN' },
  { id: '3', username: 'tesoreria', password: 'cash123',     role: 'TREASURY' },
];

export function findUser(username: string, password: string) {
  return USERS.find(u => u.username === username.trim() && u.password === password) ?? null;
}
