import { Link } from 'react-router-dom';
const items=[['/','Dashboard'],['/essential','Essentiel'],['/expert','Expert'],['/field','Terrain'],['/admin','Admin'],['/imports','Imports'],['/reports','Rapports'],['/settings','Settings']];
export function Sidebar(){return <aside className='sidebar'>{items.map(([p,l])=><Link key={p} to={p}>{l}</Link>)}</aside>;}
