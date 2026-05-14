import { ReactNode } from 'react'; import { Sidebar } from '../components/navigation/Sidebar'; import { Topbar } from '../components/navigation/Topbar';
export function AppShell({children}:{children:ReactNode}){return <div className='shell'><Sidebar/><div><Topbar/><main>{children}</main></div></div>;}
