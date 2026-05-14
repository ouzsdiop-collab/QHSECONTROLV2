export interface Site { id: string; name: string; city?: string; isActive: boolean; }
export interface Company { id: string; name: string; sector?: string; sites: Site[]; }
