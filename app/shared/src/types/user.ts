import { AppMode } from '../enums/modes';
import { UserRole } from '../enums/roles';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  enabledModes: AppMode[];
}
