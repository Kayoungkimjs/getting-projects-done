import { Register } from './register';

export interface User {
  id: number;
  userId: string;
  password: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  register: Register[];
}
