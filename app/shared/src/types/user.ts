import { AppMode } from '../enums/modes.js';
import { UserRole } from '../enums/roles.js';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  enabledModes: AppMode[];
}
