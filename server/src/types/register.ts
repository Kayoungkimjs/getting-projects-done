import { User } from './user';

export interface Register {
  registerId: number;
  projectName?: string;
  description?: string;
  categoryId?: string[];
  createdAt?: string;
  user: User;
}
