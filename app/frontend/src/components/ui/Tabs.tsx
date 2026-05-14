export interface TabItem {
  id: string;
  label: string;
}

export function Tabs({ items, active, onChange }: { items: TabItem[]; active: string; onChange?: (id: string) => void }) {
  return (
    <div className="tabs" role="tablist" aria-label="Modes de lecture">
      {items.map((item) => (
        <button key={item.id} type="button" role="tab" aria-selected={item.id === active} className={item.id === active ? 'tab active' : 'tab'} onClick={() => onChange?.(item.id)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
