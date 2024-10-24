import { User } from './user';

export interface Register {
  id: number;
  projectName?: string;
  description?: string;
  categoryId?: string[];
  createdAt?: string;
  user: User;
}
