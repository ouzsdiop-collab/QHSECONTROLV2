import { AppMode } from '../enums/modes';
import { ModuleKey } from '../enums/modules';

export interface NavigationItem {
  label: string;
  path: string;
  module: ModuleKey;
  mode: AppMode;
}
