import { User } from './user';

export interface UserProject {
  userProjectId: number;
  notes?: string;
  result?: number;
  status?: number;
  priority?: number;
  createdAt?: string;
  updatedAt?: string;
  user: User;
}
