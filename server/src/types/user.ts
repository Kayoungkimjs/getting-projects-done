import { Register } from './register';
import { UserProject } from './userProject';

export interface User {
  uid: number;
  userId: string;
  password: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  register: Register[];
  userProject?: UserProject[];
}
