// --- Sesión local (sin JWT) ---
export type Role = 'ADMIN' | 'GUARDIAN' | 'TREASURY';

export type Session = {
  userId: string;
  username: string;
  role: Role;
  domain?: string;
  loginAt: number;
};

const SESSION_KEY = 'app_session';

export function setSession(s: Session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(s));
}

export function getSession(): Session | null {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as Session; } catch { return null; }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  return !!getSession();
}

export function getUserRole(): Role | null {
  return getSession()?.role ?? null;
}
