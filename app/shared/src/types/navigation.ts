import { AppMode } from '../enums/modes.js';
import { ModuleKey } from '../enums/modules.js';

export interface NavigationItem {
  label: string;
  path: string;
  module: ModuleKey;
  mode: AppMode;
}
