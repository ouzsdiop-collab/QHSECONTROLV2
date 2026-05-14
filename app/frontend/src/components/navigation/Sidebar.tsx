import { NavLink } from 'react-router-dom';

const items = [
  ['/', 'Dashboard'],
  ['/essential', 'Essentiel'],
  ['/expert', 'Expert'],
  ['/field', 'Terrain'],
  ['/admin', 'Admin'],
  ['/imports', 'Imports'],
  ['/reports', 'Rapports'],
  ['/settings', 'Paramètres'],
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>QHSE Control V2</h2>
      {items.map(([path, label]) => (
        <NavLink key={path} to={path} style={{ padding: '0.5rem 0.7rem', borderRadius: '10px' }}>
          {label}
        </NavLink>
      ))}
    </aside>
  );
}
