
// plantilla de Usuarios

export type UserRole = 'ADMIN' | 'USER';

export interface User {
  email: string;
  password: string;
  role: UserRole;
}
