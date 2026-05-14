export function Tabs({ items, active }: { items: string[]; active: string }) {
  return <div className="tabs">{items.map((item) => <span key={item} className={item === active ? 'tab active' : 'tab'}>{item}</span>)}</div>;
}
