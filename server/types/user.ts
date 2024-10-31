import { Register } from './register';

export interface User {
  uid: number;
  userId: string;
  password: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  register: Register[];
}
